import { ApiError } from '../../Model/utils/ApiError';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

const API_BaseUrl: String = 'http://localhost:8080';

@Injectable()
export class ApiService {

    constructor(private httpServ: HttpService) {}

    get<T>(url: string): Observable<T> {
        return this.httpServ.HttpGet<T>(API_BaseUrl + url);
    }

    post<T, E>(url: string, data: T ): Observable<E | ApiError> {
        return this.httpServ.HttpPost<T, E>(API_BaseUrl + url, data);
    }

}
