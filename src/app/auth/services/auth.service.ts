import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  login(): void {
    localStorage.setItem('auth', 'example');
  }

  logout(): void {
    localStorage.removeItem('auth');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth');
  }
}
