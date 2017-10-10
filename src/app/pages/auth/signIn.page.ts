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

    private modalMessage: String;
    private modalOnError: Boolean = false;
    private modalMesVisi: Boolean = false;

    private signMessage: String;
    private signOnError: Boolean = false;
    private signMesVisi: Boolean = false;


    constructor(private authServ: AuthService, private router: Router) {
    }

    onLogin() {
      this.authServ.login(this.signUser).subscribe(
        a => {
          this.router.navigate(['/Accueil']);
          this.signOnError = false;
          this.signMesVisi = true;
          this.signMessage = 'Vous êtes bien enregistré';
        },
        (error: ApiError) => {
          this.signOnError = true;
          this.signMesVisi = true;
          this.signMessage = error.message; }
      );
  }

    onRegister() {
        this.authServ.register(this.modalUser).subscribe(
          a => {
            this.modalOnError = false;
            this.modalMesVisi = true;
            this.modalMessage = 'Vous êtes bien enregistré';
          },
          (error: ApiError) => {
            this.modalOnError = true;
            this.modalMesVisi = true;
            this.modalMessage = error.message; }
        );
    }
  }
