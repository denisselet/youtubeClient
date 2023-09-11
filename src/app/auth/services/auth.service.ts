import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  login(): void {
    // this.isLoggedInSubject.next(true);
    localStorage.setItem('auth', 'example');
  }

  logout(): void {
    // this.isLoggedInSubject.next(false);
    localStorage.removeItem('auth');
  }

  private hasToken() : boolean {
    return !!localStorage.getItem('auth');
  }
}
