import {Component, Inject, OnInit} from '@angular/core';
import {ConstraintRequestService} from "../../_services/constraint-request-service/constraint-request.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-list-complaint-request',
  templateUrl: './list-complaint-request.component.html',
  styleUrls: ['./list-complaint-request.component.css']
})
export class ListComplaintRequestComponent implements OnInit{

  data: any

  constructor(private complaintRequestService: ConstraintRequestService,
              @Inject(MAT_DIALOG_DATA) public complaintRequest: any) {
  }


  async getComplaintRequestByRequestId(requestId: any): Promise<any> {
    try {
      const count : any = await this.complaintRequestService.getCountByRequestId(requestId).subscribe({
        next:res => {
          if (res != null) {
            this.data = res;
          }
        }
      });
    } catch (error) {
      console.error('Error fetching complaint request count:', error);
      return false;
    }
  }

  ngOnInit(): void {
    this.getComplaintRequestByRequestId(this.complaintRequest)
  }

}
