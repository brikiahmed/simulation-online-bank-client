import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import {AddEditRequestComponent} from "../add-edit-request/add-edit-request.component";
import {RequestService} from "../../_services/requests-service/request.service";
import {RefuseDialogComponent} from "../refuse-dialog/refuse-dialog.component";
import {ExportRequestComponent} from "../export-request/export-request.component";
import {ConfirmDemandeComponent} from "../send-request-to-service/confirm-demande.component";
import {ToastrService} from "ngx-toastr";
import {AddComplaintRequestComponent} from "../../complaint-request/add-complaint-request/add-complaint-request.component";
import {ConstraintRequestService} from "../../_services/constraint-request-service/constraint-request.service";
import {count, Observable} from "rxjs";
import {
  ListComplaintRequestComponent
} from "../../complaint-request/list-complaint-request/list-complaint-request.component";

@Component({
  selector: 'app-gerer-demandes',
  templateUrl: './gerer-demandes.component.html',
  styleUrls: ['./gerer-demandes.component.css']
})
export class GererDemandesComponent implements OnInit {
  requestsWithConstraintInfo: any[] = [];
  displayedColumns: string[] = [
    'Reference',
    'TypeDemande',
    'firstName',
    'lastName',
    'email',
    'Comment',
    'Status',
    'nextService',
    'Action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  typeRequests: { key: string, value: string }[] = [
    { key: 'access-request', value: 'Demande d’accès' },
    { key: 'opposition-request', value: 'Demande d’opposition' },
    { key: 'rectification-request', value: 'Demande de rectification, modification, suppression' },
    { key: 'portability-request', value: 'Demande de portabilité' },
    { key: 'deletion-request', value: 'Demande d’effacement' },
    { key: 'consent-withdrawal-request', value: 'Demande de retrait du consentement' },
    { key: 'disputes', value: 'Les litiges' }
  ];

  listServices: { key: string, value: string }[] = [
    { key: 'service-access-request', value: 'Service d’accès' },
    { key: 'service-rectification-request', value: 'Service de rectification, modification, suppression' },
    { key: 'service-portability-request', value: 'Service de portabilité' },
    { key: 'service-disputes', value: 'Service de litiges' }
  ];


  constructor(private route: ActivatedRoute,
              private _dialog: MatDialog,
              private requestService: RequestService,
              private complaintRequestService: ConstraintRequestService,
              private router: Router,
              private toastr: ToastrService
  ) {
  }
  ngOnInit(): void {
    this.getDemandeList();
    this.getAllRequestsWithConstraintInfo();
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'new':
        return 'progress-bar--new';
      case 'in-progress':
        return 'progress-bar--in-progress';
      case 'accepted':
        return 'progress-bar--done';
      case 'refused':
        return 'progress-bar--refused';
      default:
        return '';
    }
  }

  getDemandeList() {
    this.requestService.getAllRequests().subscribe({
      next: (res) => {
        const transformedData = res.map((item: any) => {
          const typeRequestObj = this.typeRequests.find(type => type.key === item.typeRequest);
          const listNextServiceObj = this.listServices.find(type => type.key === item.nextService);
          const typeRequestValue = typeRequestObj ? typeRequestObj.value : item.typeRequest;
          const nextServiceValue = listNextServiceObj ? listNextServiceObj.value : item.nextService;
          return { ...item, typeRequest: typeRequestValue, nextService: nextServiceValue };
        });
        this.dataSource = new MatTableDataSource(transformedData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEditRequestForm(data : any) {
    const dialogRef =this._dialog.open(AddEditRequestComponent,{
      data,
      width: '60%',
    });
    dialogRef.afterClosed().subscribe({

      next: (val)=>{
        if (val){
          this.getDemandeList();
        }
      }

    })
  }

  openAddConstraintRequestModal(requestId: any): void {
    const dialogRef = this._dialog.open(AddComplaintRequestComponent, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result when the modal is closed (e.g., after adding the constraint)
      if (result) {
        result['request'] = requestId;
        this.sendComplaintRequest(result);
      }
    });
  }

  openRefuseDialog(requestId: number, data: any): void {
    const dialogRef = this._dialog.open(RefuseDialogComponent, {
      data: { requestId: requestId },
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        data.newKey = 'reasonOfRefuse'
        data.newKey = 'complaintRequestAllowed'
        data['reasonOfRefuse'] = result.reasonOfRefuse;
        data['complaintRequestAllowed'] = result.complaintRequestAllowed;
        this.refuseRequest(requestId, data);
        // Call the refuse request API with the requestId and result (reason)
      } else {
        console.log('Dialog closed without confirming.');
        // Handle the scenario when the dialog is closed without confirming
      }
    });
  }

  sendComplaintRequest(data: any): void {
    this.complaintRequestService.addRequest(data).subscribe({
      next: (res) => {
        this.toastr.success('La demande a été bien envoyé!', 'Success');
      },
      error: (error) => {
        // Handle error here
        this.toastr.success('La demande a été bien envoyé!', 'Success');
      },
    });
  }

    archiveRequest(requestId: any, data: any): void {
      this.requestService.archiveRequest(requestId, data).subscribe({
        next: (res) => {
          this.toastr.success('La demande a été bien archivée!', 'Success');
        this.getDemandeList();
      },
        error: (error) => {
          // Handle error here
          this.toastr.success('La demande a été bien archivée!', 'Success');
          this.getDemandeList();
          },
      });
    }

  refuseRequest(id: any, data: any) {
    this.requestService.refuseRequest(id, data).subscribe({
      next: (res) => {
        this.toastr.success('La demande a été bien refusée!', 'Success');
        this.getDemandeList();
      },

      error: (error) => {
        // Handle error here
        this.toastr.success('La demande a été bien refusée!', 'Success');
        this.getDemandeList();
        },
    });
  }

  openExportDialog(): void {
    const dialogRef = this._dialog.open(ExportRequestComponent, {
      data: { },
      width: '800px',
      height: '220px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.toastr.success('Export avec succés!', 'Success');
      } else {
        this.toastr.success('Export avec succés!', 'Success');
        // Handle the scenario when the dialog is closed without confirming
      }
    });
  }

  openComplaintRequestModal(requestId: any): void {
    this._dialog.open(ListComplaintRequestComponent, {
      data: requestId,
      width: '600px', // Set the width of the modal as needed
      height: '400px', // Set the width of the modal as needed
    });
  }

  getAllRequestsWithConstraintInfo() {
    try {
      this.complaintRequestService.getAllComplaintRequest().subscribe((data: any ) => {
        this.requestsWithConstraintInfo = data;
      });
    } catch (error) {
      console.error('Error fetching requests with constraint info:', error);
    }
  }
}
