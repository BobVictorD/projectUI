import { TokenService } from './auth/token.service';
import { AuthService } from './auth/auth.service';
import { ApiError } from '../../Model/utils/ApiError';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {Message} from 'primeng/components/common/api';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';

@Injectable()
export class ErrorService {
    private errorSuject: Subject<Message> = new Subject<Message>();

    getErrorObs(): Observable<Message> {
        return this.errorSuject;
    }

    setErorMessage(title: string, value: string) {
        this.errorSuject.next({severity: 'error', summary: title , detail: value});
    }

}
