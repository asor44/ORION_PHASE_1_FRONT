import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './asor44/login/login.component';
import { HeaderComponent } from './asor44/header/header.component';
import { ContactComponent } from './asor44/contact/contact.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
