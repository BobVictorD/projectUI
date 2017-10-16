import { TokenService } from './token.service';
import { ApiError } from '../../../Model/utils/ApiError';
import { User } from '../../../Model/User';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// tslint:disable-next-line:no-inferrable-types
const auth_BaseUrl: string = '/auth';
// tslint:disable-next-line:no-inferrable-types
const registerUrl: string = '/register';
// tslint:disable-next-line:no-inferrable-types
const loginUrl: string = '/login';

// tslint:disable-next-line:no-inferrable-types
const headerParam: string = 'authorization';

// tslint:disable-next-line:no-inferrable-types
const localStorageItem: string = 'userProfil';

const API_BaseUrl: String = 'http://localhost:8080';


@Injectable()
export class AuthService {

    constructor(private router: Router, private apiServ: ApiService, private http: Http, private tokenService: TokenService) {}

    login(user: User): Observable<boolean | ApiError> {
      // récupération du login dans l'api
      return this.http.post(API_BaseUrl + auth_BaseUrl + loginUrl, user).map(
        res => {
          this.tokenService.setToken(res['_body']);
          return true;
        }
      );
    }

    logout() {
      this.tokenService.setToken(null);
      // Send the user back to the singIn after logout
      this.router.navigateByUrl('/SignIn');
    }

    isAuth() {
      return this.tokenService.hasToken();
    }

    register(user: User): Observable<User | ApiError> {
      return this.apiServ.post<User, User>(auth_BaseUrl + registerUrl, user);
    }

}
