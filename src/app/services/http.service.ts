import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}

    HttpGet<T>(url: string): Observable<T> {
        return this.http.get(url)
            .map(res => res.json().data as T);
    }

}
