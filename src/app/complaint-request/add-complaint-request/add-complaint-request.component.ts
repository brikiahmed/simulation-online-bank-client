import {Component, Inject} from '@angular/core';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-complaint-request',
  templateUrl: './add-complaint-request.component.html',
  styleUrls: ['./add-complaint-request.component.css']
})
export class AddComplaintRequestComponent {

  public Editor = ClassicEditor as {
    create: any;
  };
  complaintBody: any;

  constructor(
    private router: Router,
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
