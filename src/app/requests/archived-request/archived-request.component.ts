import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RequestService} from "../../_services/requests-service/request.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-archived-request',
  templateUrl: './archived-request.component.html',
  styleUrls: ['./archived-request.component.css']
})
export class ArchivedRequestComponent implements OnInit{
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'Reference',
    'TypeDemande',
    'firstName',
    'lastName',
    'email',
    'Comment',
    'Status',
  ];
  typeRequests: { key: string, value: string }[] = [
    { key: 'access-request', value: 'Demande d’accès' },
    { key: 'opposition-request', value: 'Demande d’opposition' },
    { key: 'rectification-request', value: 'Demande de rectification, modification, suppression' },
    { key: 'portability-request', value: 'Demande de portabilité' },
    { key: 'deletion-request', value: 'Demande d’effacement' },
    { key: 'consent-withdrawal-request', value: 'Demande de retrait du consentement' },
    { key: 'disputes', value: 'Les litiges' }
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private route: ActivatedRoute,
              private _dialog: MatDialog,
              private requestService: RequestService,
              private router: Router
  ) { }
  ngOnInit(): void {
    this.getArchivedDemandeList()
  }

  getArchivedDemandeList() {
    this.requestService.getAllArchivedRequests().subscribe({
      next: (res) => {
        const transformedData = res.map((item: any) => {
          const typeRequestObj = this.typeRequests.find(type => type.key === item.typeRequest);
          const typeRequestValue = typeRequestObj ? typeRequestObj.value : item.typeRequest;
          return { ...item, typeRequest: typeRequestValue };
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

  exportArchived()
  {

  }

}
