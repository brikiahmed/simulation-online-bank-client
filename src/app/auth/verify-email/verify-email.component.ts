import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit{

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token']; // Get the token value from the query parameters
      // Make an HTTP GET request to the email verification endpoint
      this.http.get('http://localhost:8085/bank-back/api/auth/verify-email', { params: { token } }).subscribe(
        (response: any) => {
          // Email verification successful
          alert('vérificaton du mail avec succés!');
        },
        error => {
          // Email verification failed
          alert('vérificaton du mail avec succés!');
        }
      );
    });
    this.router.navigate(['/login']);
  }

}
