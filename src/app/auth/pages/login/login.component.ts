import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  onFormSubmit(loginForm: NgForm) {
    console.log(loginForm);
    this.auth.login();
    this.router.navigate(['/youtube']);
  }

  ngOnInit(): void {
    const isLoggedIn = this.auth.isLoggedIn();
    if (isLoggedIn) this.router.navigate(['youtube']);
  }
}
