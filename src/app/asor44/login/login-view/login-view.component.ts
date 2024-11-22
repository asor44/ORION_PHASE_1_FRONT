import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  async handleLogin() {
    try {
      const request = await this.authService.signIn(this.user);
      if (request.status === 201  ) {
        localStorage.setItem('token', request.data.token);
        await this.router.navigate(['/profil']);
      }
    } catch (e) {
      console.error(e);
    }
  }
}
