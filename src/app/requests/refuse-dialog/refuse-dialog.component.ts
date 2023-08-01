import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-refuse-dialog',
  templateUrl: './refuse-dialog.component.html',
  styleUrls: ['./refuse-dialog.component.css']
})
export class RefuseDialogComponent {
  reasonOfRefuse: string;
  complaintRequestAllowed: string = 'true'; // 'oui' as the default selected value

  constructor(
    public dialogRef: MatDialogRef<RefuseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.reasonOfRefuse = '';
  }

  onConfirm(): void {
    const dialogData = {
      reasonOfRefuse: this.reasonOfRefuse,
      complaintRequestAllowed: this.complaintRequestAllowed
    };
    this.dialogRef.close(dialogData);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
