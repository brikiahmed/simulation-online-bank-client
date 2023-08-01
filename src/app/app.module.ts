import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { LoginComponent } from './auth/login/login.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DemandeDePassationComponent } from './demande-de-passation/demande-de-passation.component';
import { GererDemandesComponent } from './requests/gerer-demandes/gerer-demandes.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AddEditGabComponent } from './add-edit-gab/add-edit-gab.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDemandeComponent } from './requests/send-request-to-service/confirm-demande.component';
import { RegisterComponent } from './auth/register/register.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import {AddEditRequestComponent} from "./requests/add-edit-request/add-edit-request.component";
import {MatCardModule} from "@angular/material/card";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { RefuseDialogComponent } from './requests/refuse-dialog/refuse-dialog.component';
import { ExportRequestComponent } from './requests/export-request/export-request.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { ArchivedRequestComponent } from './requests/archived-request/archived-request.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatExpansionModule} from "@angular/material/expansion";
import {ToastrModule} from "ngx-toastr";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AddComplaintRequestComponent } from './complaint-request/add-complaint-request/add-complaint-request.component';
import { ListComplaintRequestComponent } from './complaint-request/list-complaint-request/list-complaint-request.component';
import {MatBadgeModule} from "@angular/material/badge";

@NgModule({
  declarations: [
    AppComponent,
    AddEditUserComponent,
    ConfirmDemandeComponent,
    LoginComponent,
    UsersComponent,
    SidenavComponent,
    DemandeDePassationComponent,
    GererDemandesComponent,
    HeaderComponent,
    HomeComponent,
    AcceuilComponent,
    AddEditGabComponent,
    ConfirmDemandeComponent,
    RegisterComponent,
    VerifyEmailComponent,
    AddEditRequestComponent,
    RefuseDialogComponent,
    ExportRequestComponent,
    ArchivedRequestComponent,
    EmailTemplateComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    AddComplaintRequestComponent,
    ListComplaintRequestComponent,
  ],
  imports: [
    CKEditorModule,
    FontAwesomeModule,
    MatTableModule,
    MatInputModule,
    BrowserModule,
    MatFormFieldModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSidenavModule, MatListModule,
    MatDividerModule,
    MatMenuModule,
    FormsModule,
    MatTooltipModule,
    MatExpansionModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-center-center',
    }), MatProgressBarModule, MatBadgeModule,
  ],
  providers: [
    authInterceptorProviders,
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



