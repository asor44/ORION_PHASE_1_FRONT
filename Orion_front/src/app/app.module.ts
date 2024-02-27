import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './asor44/header/header.component';
import { FooterViewComponent } from './asor44/footer/footer-view/footer-view.component';
import { SignUpViewComponent } from './asor44/sign-up/sign-up-view/sign-up-view.component';
import { LoginViewComponent } from './asor44/login/login-view/login-view.component';
import { ContactComponent } from './asor44/contact/contact.component';

import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./asor44/home-page/home-page.component";
import { DiscoveryDayComponent } from './asor44/discovery-day/discovery-day.component';
import { OrientationCourseComponent } from './asor44/orientation-course/orientation-course.component';
import { CisorComponent } from './asor44/cisor/cisor.component';
import { SingingPageComponent } from './asor44/singing-page/singing-page.component';
import { FormsModule } from "@angular/forms";
import { HelpUsComponent } from "./asor44/help-us/help-us.component";
import { AcadefComponent } from './asor44/acadef/acadef.component';
import { SafeUrlPipe } from './safe-url.pipe';




/***
 ROUTER ANGULAR
 path (URL), component (Nom du component)
 ***/
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'register', component: SignUpViewComponent},
  { path: 'discovery-day', component: DiscoveryDayComponent},
  { path: 'orientation-course', component: OrientationCourseComponent},
  { path: 'cisor', component: CisorComponent},
  { path: 'singings', component: SingingPageComponent},
  { path: 'help-us', component: HelpUsComponent},
  { path: 'acadef', component: AcadefComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterViewComponent,
    SignUpViewComponent,
    LoginViewComponent,
    ContactComponent,
    HomePageComponent,
    DiscoveryDayComponent,
    OrientationCourseComponent,
    CisorComponent,
    SingingPageComponent,
    HelpUsComponent,
    AcadefComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
