import { Component } from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string;

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) {
    this.email = '';
  }

  onSubmit(): void {
    this.authService.forgotPassword(this.email).subscribe(
      (res: HttpResponse<any>) => {
        console.log(res);
        if (res.status === 200) {
          // Show a success message to the user
          this.toastr.success('Un email a été envoyé pour generer un nouveau mot de passe!', 'Success');
        }
      },
      (error: any) => {
        this.toastr.success('Un email a été envoyé pour generer un nouveau mot de passe!', 'Success');

      }
    );
  }
}
