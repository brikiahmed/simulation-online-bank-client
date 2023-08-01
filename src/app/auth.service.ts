import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8085/bank-back/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuthData() {
    return this.http.get('db.json');
  }
  validateUser(username: string, password: string) {
    return this.getAuthData().pipe(
      map((data: any) => {
        const user = data.users.find((u: any) => u.username === username && u.password === password);
        if (user) {
          return { authenticated: true, user };
        } else {
          return { authenticated: false };
        }
      })
    );
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

}
