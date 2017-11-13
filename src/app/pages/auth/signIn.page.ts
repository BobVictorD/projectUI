import { ApiError } from '../../../Model/utils/ApiError';
import { User } from '../../../Model/User';
import { AuthService } from '../../services/auth/auth.service';
import {Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'signIn-page',
    templateUrl: './signIn.page.html',
    providers: [AuthService]
  })
  // tslint:disable-next-line:component-class-suffix
  export class SignInPage {

    private modalUser: User = new User();
    private signUser: User = new User();

    private popUpVisibility: Boolean = false;


    constructor(private authServ: AuthService, private router: Router) {
    }

    onLogin() {
      this.authServ.login(this.signUser).subscribe(
        a => {
          this.router.navigate(['/Accueil']);
        },
        (error: ApiError) => {
          console.log(error);
          }
      );
  }
  showAdd() {
    this.popUpVisibility = true;
  }

  onRegister() {
      this.authServ.register(this.modalUser).subscribe(
        a => {
          this.popUpVisibility = false;
        },
        (error: ApiError) => {
        }
      );
  }
  }
