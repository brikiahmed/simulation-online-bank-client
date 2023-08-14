import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8085/bank-back/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRoles: string[] = [];

  constructor(private http: HttpClient) {
    this.loadUserRole();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(AUTH_API + 'forgot-password', {
      email,
    });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(AUTH_API + `reset-password`, { token, newPassword });
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  private loadUserRole() {
    const jsonString: any = sessionStorage.getItem('auth-user');
    const jsonObject = JSON.parse(jsonString);
    if (jsonObject) {
      this.userRoles = jsonObject.roles[0];
    }
  }

  getUserRoles(): string[] {
    return this.userRoles;
  }
}
