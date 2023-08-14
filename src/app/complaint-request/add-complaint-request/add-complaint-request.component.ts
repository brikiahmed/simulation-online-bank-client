import {Component, Inject} from '@angular/core';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-complaint-request',
  templateUrl: './add-complaint-request.component.html',
  styleUrls: ['./add-complaint-request.component.css']
})
export class AddComplaintRequestComponent {
  public Editor : any;
  complaintBody: any;

  constructor(
    public dialogRef: MatDialogRef<AddComplaintRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  onConfirm(): void {
    const dialogData = {
      constraintBody: this.complaintBody,
    };
    this.dialogRef.close(dialogData);
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
