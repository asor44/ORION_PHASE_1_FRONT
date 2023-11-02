import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './asor44/header/header.component';
import { FooterViewComponent } from './asor44/footer/footer-view/footer-view.component';
import { SignUpViewComponent } from './asor44/sign-up/sign-up-view/sign-up-view.component';
import { LoginViewComponent } from './asor44/login/login-view/login-view.component';

import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./asor44/home-page/home-page.component";
import { DiscoveryDayComponent } from './asor44/discovery-day/discovery-day.component';
import { CisorComponent } from './asor44/cisor/cisor.component';



/***
 ROUTER ANGULAR
 path (URL), component (Nom du component)
 ***/
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'register', component: SignUpViewComponent},
  { path: 'discovery-day', component: DiscoveryDayComponent},
  { path: 'cisor', component: CisorComponent},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterViewComponent,
    SignUpViewComponent,
    LoginViewComponent,
    HomePageComponent,
    DiscoveryDayComponent,
    CisorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
