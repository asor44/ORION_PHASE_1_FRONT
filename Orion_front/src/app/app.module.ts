import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AcadefComponent } from './asor44/acadef/acadef.component';
import { ActuComponent } from './asor44/actu/actu.component';
import { AppComponent } from './app.component';
import { ChantierComponent } from './asor44/chantier/chantier.component';
import { ContactComponent } from './asor44/contact/contact.component';
import { CisorComponent } from './asor44/cisor/cisor.component';
import { DiscoveryDayComponent } from './asor44/discovery-day/discovery-day.component';
import { FooterViewComponent } from './asor44/footer/footer-view/footer-view.component';
import { GradesComponent } from './asor44/grades/grades.component';
import { HeaderComponent } from './asor44/header/header.component';
import { HelpUsComponent } from "./asor44/help-us/help-us.component";
import { HomeComponent } from './asor44/home/home.component';
import { HomePageComponent } from "./asor44/home-page/home-page.component";
import { LoginViewComponent } from './asor44/login/login-view/login-view.component';
import { ObjectComponent } from './asor44/object/object.component';
import { OrientationCourseComponent } from './asor44/orientation-course/orientation-course.component';
import { RegisterComponent } from './asor44/register/register.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { SingingPageComponent } from './asor44/singing-page/singing-page.component';

/***
 ROUTER ANGULAR
 path (URL), component (Nom du component)
 ***/
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acadef', component: AcadefComponent },
  { path: 'actu', component: ActuComponent },
  { path: 'cisor', component: CisorComponent },
  { path: 'chantier', component: ChantierComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'discovery-day', component: DiscoveryDayComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'help-us', component: HelpUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'object', component: ObjectComponent },
  { path: 'orientation-course', component: OrientationCourseComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'singings', component: SingingPageComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations: [
    AppComponent,
    AcadefComponent,
    ActuComponent,
    ChantierComponent,
    ContactComponent,
    CisorComponent,
    DiscoveryDayComponent,
    FooterViewComponent,
    GradesComponent,
    HeaderComponent,
    HelpUsComponent,
    HomeComponent,
    HomePageComponent,
    LoginViewComponent,
    ObjectComponent,
    OrientationCourseComponent,
    RegisterComponent,
    SafeUrlPipe,
    SingingPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
