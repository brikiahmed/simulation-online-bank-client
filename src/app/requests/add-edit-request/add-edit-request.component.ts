import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RequestService} from "../../_services/requests-service/request.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDemandeComponent} from "../send-request-to-service/confirm-demande.component";
import {RefuseDialogComponent} from "../refuse-dialog/refuse-dialog.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-edit-request',
  templateUrl: './add-edit-request.component.html',
  styleUrls: ['./add-edit-request.component.css']
})
export class AddEditRequestComponent implements OnInit{
  requestForm: FormGroup;
  isEdit = false;

  typeRequests: { key: string, value: string }[] = [
    { key: 'access-request', value: 'Demande d’accès' },
    { key: 'opposition-request', value: 'Demande d’opposition' },
    { key: 'rectification-request', value: 'Demande de rectification, modification, suppression' },
    { key: 'portability-request', value: 'Demande de portabilité' },
    { key: 'deletion-request', value: 'Demande d’effacement' },
    { key: 'consent-withdrawal-request', value: 'Demande de retrait du consentement' },
    { key: 'disputes', value: 'Les litiges' }
  ];
  private requestId: any;

  constructor(private router: Router,
              private requestService: RequestService,
              private _fb: FormBuilder,
              private _dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data:any  ,
              private toastr: ToastrService
  ) {
    this.isEdit = !this.router.url.includes('ajout-demande');
    this.requestForm = this._fb.group({
      reference: this.generateReference(),
      typeRequest: '',
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      cin: '',
      address: '',
      comment: '',
      status:'',
    });
  }

  ngOnInit(): void {
    this.requestForm.patchValue(this.data);
    this.requestId = this.data.id
  }

  generateReference(): string {
    const referenceLength = 12;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let reference = '';
    for (let i = 0; i < referenceLength; i++) {
      reference += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return reference;
  }

  onFormSubmit() {
    if (this.requestForm.valid) {
      if (this.data && this.isEdit) {
        console.log(this.requestForm.value);
        this.requestService.editRequest(this.data.id, this.requestForm.value).subscribe({
          next: (val: any) => {
            this.toastr.success('La demande a été bien modifier!', 'Success');
            // this._dialogRef.close(true);
            // this.router.navigate(['/gerer-demandes']);
            location.reload();
          },
          error: (err: HttpErrorResponse) => {
            if (err.status === 400 && err.error === 'Duplicate request detected.') {
              this.toastr.warning('Doublon detecté!', 'Warning');
            } else {
              this.router.navigate(['/gerer-demandes']);
            }
          }
        });
      } else {
        this.requestService.addRequest(this.requestForm.value).subscribe({
          next: (val: any) => {
            this.toastr.success('Demande ajoutée avec succés!', 'Success');
            // this._dialogRef.close(true);
            this.router.navigate(['/gerer-demandes']);
          },
          error: (err: HttpErrorResponse) => {
            if (err.status === 400 && err.error === 'Duplicate request detected.') {
              this.toastr.warning('Doublon detecté!', 'Warning');
            } else {
              this.router.navigate(['/gerer-demandes']);
            }
          }
        });
      }
    }
  }

  sendToOtherService(data: any) {
    const dialogRef =this._dialog.open(ConfirmDemandeComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        data.value.newKey = 'nextService'
        data.value['nextService'] = result;
        this.requestService.editRequest(this.requestId, data.value);
        // Call the refuse request API with the requestId and result (reason)
      } else {
        console.log('Dialog closed without confirming.');
        // Handle the scenario when the dialog is closed without confirming
      }
    });
  }
}
