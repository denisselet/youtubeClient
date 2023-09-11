import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from './password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator()])
  });

  constructor(private auth: AuthService, private router: Router) {
  }

  onSubmit() {
    this.auth.login();
    this.router.navigate(['/youtube']);
    const formData = { ...this.loginForm.value };
    console.log(formData);
  }
}
