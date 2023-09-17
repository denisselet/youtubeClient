import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from './password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator()]),
  });

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    for (const controlName in this.loginForm.controls) {
      if (
        Object.prototype.hasOwnProperty.call(
          this.loginForm.controls,
          controlName
        )
      ) {
        this.loginForm.get(controlName)?.markAsTouched();
      }
    }

    if (!this.loginForm.invalid) {
      this.auth.login();
      this.router.navigate(['/youtube']);
    }
  }
}
