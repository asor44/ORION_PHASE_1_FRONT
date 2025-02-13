import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: false
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router) {}

  step: number = 1; // Étape actuelle
  form: any = {
    firstName : '',
    lastName: '',
    birthdate: '',
    email: '',
    password: '',
    address: '',
    postalCode: '',
    city: '',
    country: '',
    phone: ''
  };

  nextStep(): void {
    if (this.step === 1) {
      this.step = 2;
    }
  }

  previousStep(): void {
    if (this.step === 2) {
      this.step = 1;
    }
  }

  async submitForm(): Promise<void> {
    try {
      const request = await this.authService.signUp(this.form);
      if (request.status === 201) {
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
