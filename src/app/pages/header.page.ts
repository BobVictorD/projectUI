import { AuthService } from '../services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'page-header',
  templateUrl: './header.page.html'
})
// tslint:disable-next-line:component-class-suffix
export class HeaderPage {
  constructor(private authService: AuthService) {

  }

  isAuth() {
    return this.authService.isAuth() ? 'visible' : 'hidden';
  }

  logOut() {
    this.authService.logout();
  }
}
