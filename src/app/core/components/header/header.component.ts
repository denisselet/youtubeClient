import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SortTypes } from 'src/app/youtube/models/sort.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  inputValue = '';

  isLoggedIn$: Observable<boolean>;

  constructor(
    private route: Router,
    private authService: AuthService
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  @Output() sort = new EventEmitter<{
    type: SortTypes;
    orderAsc: boolean;
    term: string;
  }>();

  @Output() inputString = new EventEmitter();

  settingShow = false;

  term = '';

  type: SortTypes = 'date';

  orderAsc = true;

  sendSort() {
    this.sort.emit({
      type: this.type,
      orderAsc: this.orderAsc,
      term: this.term,
    });
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['login']);
  }

  login() {
    this.authService.login();
    this.route.navigate(['youtube']);
  }

  onInputChanged() {
    this.inputString.emit(this.inputValue);
  }
}
