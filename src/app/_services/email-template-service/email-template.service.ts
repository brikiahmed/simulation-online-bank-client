import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailTemplateService {
  constructor(private _http: HttpClient) { }

  editEmailTemplate (id: any ,data:any): Observable<any> {
    return this._http.put( `http://localhost:8085/bank-back/email_template/update-email/${id}`,data);
  }
  getEmailTemplateById(id: string):Observable<any> {
    return this._http.get(`http://localhost:8085/bank-back/email_template/template/${id}`);
  }
}
