import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GabaritsService {


constructor(private _http: HttpClient) { }
  AddGab (data:any): Observable<any> {
return this._http.post(' http://localhost:8085/bank-back/Gabarits/CreateGabarits',data);
  }
  EditGab (id: string ,data:any): Observable<any> {
    return this._http.put( `http://localhost:8085/bank-back/Gabarits/UpdateGabarits/${id}`,data);
      }
  getGabList():Observable<any> {
    return this._http.get('http://localhost:8085/bank-back/Gabarits/allEnabled');
  }

  deleteGab(id : string):Observable<any> {
    return this._http.delete(`http://localhost:8085/bank-back/Gabarits/${id}`);  }

}
