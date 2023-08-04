import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private _http: HttpClient) { }
  addRequest (data:any): Observable<any> {
    return this._http.post(' http://localhost:8085/bank-back/request/create-request',data);
  }
  editRequest (id: string ,data:any): Observable<any> {
    return this._http.put( `http://localhost:8085/bank-back/request/update-request/${id}`,data);
  }
  getAllRequests():Observable<any> {
    return this._http.get('http://localhost:8085/bank-back/request/all');
  }

  getAllArchivedRequests():Observable<any> {
    return this._http.get('http://localhost:8085/bank-back/request/archived');
  }

  refuseRequest(requestId : string, data: any):Observable<any> {
    return this._http.put(`http://localhost:8085/bank-back/request/refuse/${requestId}`, data);
  }

  archiveRequest(requestId : any, data: any):Observable<any> {
    return this._http.put(`http://localhost:8085/bank-back/request/archive/${requestId}`, data);
  }

  getRequestStatusCount(): Observable<any> {
    return this._http.get('http://localhost:8085/bank-back/request/status');
  }

  getRequestByCreationDateAndTypeRequestCount(): Observable<any> {
    return this._http.get('http://localhost:8085/bank-back/request/creation-date');
  }

  exportRequests(typeRequest: string, date: string, status: string): Observable<Blob> {
    let params = new HttpParams();
    params = params.append('typeRequest', typeRequest);
    params = params.append('creationDate', date);
    params = params.append('status', status);

    return this._http.get('http://localhost:8085/bank-back/request/export', {
      responseType: 'blob',
      headers: new HttpHeaders().append('Accept', 'application/vnd.ms-excel'),
      params: params
    });
  }


}

