import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassationService {


  constructor(private _http: HttpClient) { }
  Addpassation (data:any): Observable<any> {
return this._http.post(' http://localhost:8085/bank-back/request/create-request',data);
  }
  Editpassation (id: string ,data:any): Observable<any> {
    return this._http.put( `http://localhost:8085/bank-back/request/update-request/${id}`,data);
      }
  getpassationList():Observable<any> {
    return this._http.get('http://localhost:8085/bank-back/request/all');
  }

  deletepassation(id : string):Observable<any> {
    return this._http.delete(`http://localhost:8085/bank-back/request/${id}`);  }

}
