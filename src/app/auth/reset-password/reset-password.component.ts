import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../_services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  resetToken: string = '';

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router) {
    // Récupérer le jeton de réinitialisation du mot de passe depuis l'URL
    this.route.queryParams.subscribe(params => {
      this.resetToken = params['token'];
      //this.resetPassword();
    });
  }

  resetPassword() {
    // Logique pour réinitialiser le mot de passe
    // Vous devrez implémenter cette logique dans le service AuthService
    // Assurez-vous de valider et de traiter les mots de passe saisis par l'utilisateur
    this.authService.resetPassword(this.resetToken, this.newPassword).subscribe(
      (res : any) => {
        console.log(res);
        // Réinitialisation du mot de passe réussie
        this.toastr.success('Mot de passe réinitialiser avec succés!', 'Success');
        //this.router.navigate(['/login']); // Rediriger vers la page de connexion après la réinitialisation
      },
      (error: any) => {
        console.log(error);
        // Gérer les erreurs en cas d'échec de la réinitialisation du mot de passe
        this.toastr.success('Mot de passe réinitialiser avec succés!', 'Success');
        this.router.navigate(['/login']);
      }
    );
  }
}
