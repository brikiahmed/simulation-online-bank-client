import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PassationService } from '../../passation.service';
import { GabaritsService } from '../../gabarits.service';

@Component({
  selector: 'app-confirm-demande',
  templateUrl: './confirm-demande.component.html',
  styleUrls: ['./confirm-demande.component.css']
})
export class ConfirmDemandeComponent {
  formGroup: FormGroup;
  listServices: { key: string, value: string }[] = [
    { key: 'service-access-request', value: 'Service d’accès' },
    { key: 'service-rectification-request', value: 'Service de rectification, modification, suppression' },
    { key: 'service-portability-request', value: 'Service de portabilité' },
    { key: 'service-disputes', value: 'Service de litiges' }
  ];
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ConfirmDemandeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formGroup = this.fb.group({
      nextService: [''] // Initialize with an empty value or any default value you need
    });
  }

  onConfirm(): void {
    const formValue = this.formGroup.value;
    const selectedService = formValue.nextService;
    this.dialogRef.close(selectedService);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
