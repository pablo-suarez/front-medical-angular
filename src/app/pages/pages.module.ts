import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ClientServiceComponent } from './client-service/client-service.component';
import { AuthModule } from './auth/auth.module';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ClientServiceComponent,
    ContactComponent
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    ClientServiceComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AuthModule
  ]
})
export class PagesModule { }
