import { ErrorService } from './error.service';
import { TokenService } from './auth/token.service';
import { AuthService } from './auth/auth.service';
import { ApiError } from '../../Model/utils/ApiError';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

const API_BaseUrl: String = 'http://localhost:8080';

@Injectable()
export class ApiService {

    constructor(private httpServ: HttpService,
         private tokenService: TokenService,
         private errorService: ErrorService) {}

    get<T>(url: String): Observable<T> {
        return this.httpServ.HttpGet<T>(API_BaseUrl + url.toString(), this.tokenService.getHeader())
            .catch((err: ApiError) => {
                this.errorService.setErorMessage('ErrorApi', err.message.toString());
                return Observable.throw(err);
            });
    }

    post<T, E>(url: String, data: T ): Observable<E> {
        return this.httpServ.HttpPost<T, E>(API_BaseUrl + url.toString(), data, this.tokenService.getHeader())
            .catch((err: ApiError) => {
                this.errorService.setErorMessage('ErrorApi', err.message.toString());
                return Observable.throw(err);
            });
    }

    delete(url: String): Observable<void> {
        return this.httpServ.HttpDelete(API_BaseUrl + url.toString(), this.tokenService.getHeader())
            .map(() => {
                this.errorService.setInfoMessage('InfoApi', 'L\'élement a bien été supprimé');
            }
            )
            .catch((err: ApiError) => {
                this.errorService.setErorMessage('ErrorApi', err.message.toString());
                return Observable.throw(err);
            });
    }


}
