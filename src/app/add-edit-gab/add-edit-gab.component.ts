import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GabaritsService } from '../gabarits.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-gab',
  templateUrl: './add-edit-gab.component.html',
  styleUrls: ['./add-edit-gab.component.css']
})
export class AddEditGabComponent implements OnInit {

  gabForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _gabaritsservice: GabaritsService,
    private _dialogRef: MatDialogRef<AddEditGabComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.gabForm = this._fb.group({
      designation: '',
      demension: '',
      fonction: '',
      is_enabled: true,
      date_debut: '',
      date_prevu_de_retour: ''

    });
  }

  ngOnInit(): void {
    this.gabForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.gabForm.valid) {
      if (this.data) {
        this._gabaritsservice.EditGab(this.data.id, this.gabForm.value).subscribe({
          next: (val: any) => {
            alert('User detail update successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      } else {
        this._gabaritsservice.AddGab(this.gabForm.value).subscribe({
          next: (val: any) => {
            alert('User added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
    }
  }

  cl() {
    this._dialogRef.close();
  }
}
