import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterService } from '../../register.service';
import { UsersService } from '../../users.service';
import { AuthService } from '../../auth.service';
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  passwordStrength: number = 0;
  showPassword = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router,
  private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  generateRandomPassword(): void {
    const length = 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    this.form.password = password; // Remplir automatiquement le champ de mot de passe
  }

  getPasswordStrength(password: string): number {
    // Vous pouvez mettre en œuvre des règles pour évaluer la force du mot de passe ici
    // Par exemple, compter le nombre de caractères, de chiffres, de majuscules, etc.

    // Ici, nous allons simplement renvoyer un pourcentage de 0 à 100 basé sur la longueur du mot de passe
    return (password.length / 12) * 100;
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe(
      data => {
        this.toastr.success('Merci de vérifier votre boite mail', 'Success');

        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/login']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
