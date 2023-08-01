import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConstraintRequestService {

  constructor(private _http: HttpClient) { }
  addRequest (data:any): Observable<any> {
    return this._http.post(' http://localhost:8085/bank-back/constraint-request/create-request-constraint',data);
  }

  getCountByRequestId(requestId: number): Observable<number> {
    const url = ` http://localhost:8085/bank-back/constraint-request/get-by-request-id/${requestId}`;
    return this._http.get<number>(url);
  }

  getAllComplaintRequest(): Observable<number> {
    const url = ` http://localhost:8085/bank-back/constraint-request/get-all-constraint-requests`;
    return this._http.get<number>(url);
  }

}
