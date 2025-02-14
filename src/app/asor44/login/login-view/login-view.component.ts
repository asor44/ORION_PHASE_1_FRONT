import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-login-view',
    templateUrl: './login-view.component.html',
    styleUrls: ['./login-view.component.scss'],
    standalone: false
})
export class LoginViewComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService){
  }

  async handleLogin() {
    this.toastr.clear();
    this.toastr.info('Connexion en cours', 'Information');
    try {
      const request: any = await this.authService.signIn(this.user);
      if (request.status === 201  ) {
        localStorage.setItem('token', request.data.access_token);
        await this.router.navigate(['/profil']);
      }
    } catch (e) {
      console.error(e);
      this.toastr.error('Erreur lors de la connexion', 'Erreur');
    }
  }
}
