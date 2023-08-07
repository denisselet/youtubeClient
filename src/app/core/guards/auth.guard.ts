import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
class PermissionsService {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  // canActivate(): boolean {
    console.log(next);
    console.log(state);

    if (this.auth.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionsService).canActivate(route, state);
};
