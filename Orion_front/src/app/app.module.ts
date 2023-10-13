import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './asor44/header/header.component';
import { FooterViewComponent } from './asor44/footer/footer-view/footer-view.component';
import { SignUpViewComponent } from './asor44/sign-up/sign-up-view/sign-up-view.component';
import { LoginViewComponent } from './asor44/login/login-view/login-view.component';
import { ContactComponent } from './asor44/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterViewComponent,
    SignUpViewComponent,
    LoginViewComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
