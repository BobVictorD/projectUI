import { ApiError } from '../../Model/utils/ApiError';
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class HttpService {

    constructor(private http: Http) {}

    HttpGet<T>(url: string, hearders: Headers): Observable<T> {
        return this.http.get(url, {headers: hearders })
            .map(res => res.json() as T)
            .catch(this.handleError);
    }

    HttpPost<T, E>(url: string, data: T, hearders: Headers): Observable<E> {
        return this.http.post(url, data, { headers: hearders })
            .map(res => {
                return res.json() as E;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): ErrorObservable {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.json() as ApiError);
    }

}
