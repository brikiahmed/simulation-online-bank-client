import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private _http: HttpClient) { }
  AddUser (data:any): Observable<any> {
return this._http.post(' http://localhost:8085/bank-back/User/CreateUser',data);
  }
  EditUser (id: string ,data:any): Observable<any> {
    return this._http.put( `http://localhost:8085/bank-back/User/UpdateUser/${id}`,data);
      }
  getUserList():Observable<any> {
    return this._http.get(`http://localhost:8085/bank-back/User/all`);
  }

  deleteUser(id : string):Observable<any> {
    return this._http.delete(`http://localhost:8085/bank-back/User/${id}`);  }

}
