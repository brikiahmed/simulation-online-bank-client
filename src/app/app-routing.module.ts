import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RegisterComponent } from './auth/register/register.component';
import {VerifyEmailComponent} from "./auth/verify-email/verify-email.component";
import {AddEditRequestComponent} from "./requests/add-edit-request/add-edit-request.component";
import {GererDemandesComponent} from "./requests/gerer-demandes/gerer-demandes.component";
import {ExportRequestComponent} from "./requests/export-request/export-request.component";
import {ArchivedRequestComponent} from "./requests/archived-request/archived-request.component";
import {EmailTemplateComponent} from "./email-template/email-template.component";
import {ForgetPasswordComponent} from "./auth/forget-password/forget-password.component";
import {ResetPasswordComponent} from "./auth/reset-password/reset-password.component";
import {ProfileComponent} from "./profile/profile.component";
import {AddEditUserComponent} from "./add-edit-user/add-edit-user.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  {path: 'acceuil', component:AcceuilComponent},
  {path: 'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  { path: 'sidenav', component: SidenavComponent },
  { path: 'Users', component: UsersComponent },
  { path:'ajout-demande' , component:AddEditRequestComponent},
  {path:'gerer-demandes', component:GererDemandesComponent},
  {path:'archive', component:ArchivedRequestComponent},
  {path:'forgot-password', component:ForgetPasswordComponent},
  { path: 'reset-password', component: ResetPasswordComponent },
  {path:'profile', component: ProfileComponent},
  {path:'add-edit-user', component: AddEditUserComponent},
  { path: 'email-templates/:id', component: EmailTemplateComponent }, // Route with template ID as a parameter
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }











