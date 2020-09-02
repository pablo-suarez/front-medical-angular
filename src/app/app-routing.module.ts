import { ContactComponent } from './pages/contact/contact.component';
import { ClientServiceComponent } from './pages/client-service/client-service.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

import { LoginComponent } from './pages/auth/login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestResetComponent } from './pages/auth/request-reset/request-reset.component';
import { ResponseResetComponent } from './pages/auth/response-reset/response-reset.component';



const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'client-service',
    component: ClientServiceComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'request-reset',
    component: RequestResetComponent
  },
  {
    path: 'response-reset',
    component: ResponseResetComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
