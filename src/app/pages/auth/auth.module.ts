import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ResponseResetComponent } from './response-reset/response-reset.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    EditProfileComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  exports:[
    LoginComponent,
    ProfileComponent,
    EditProfileComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AuthModule { }
