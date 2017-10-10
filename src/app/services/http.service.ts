import { ApiError } from '../../Model/utils/ApiError';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}

    HttpGet<T>(url: string): Observable<T> {
        return this.http.get(url)
            .map(res => res.json() as T);
    }

    HttpPost<T, E>(url: string, data: T): Observable<E | ApiError> {
        return this.http.post(url, data)
            .map(res => {
                return res.json() as E;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<ApiError> {
        console.error('An error occurred', error); // for demo purposes only
        throw error.json() as ApiError;
    }

}
