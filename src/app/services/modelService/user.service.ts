import { User } from '../../../Model/User';
import { ModelService } from './modelService';
import { ApiError } from '../../../Model/utils/ApiError';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService extends ModelService<User> {

    constructor(protected api: ApiService) {
        super('/user');
    }

    getMe(): Observable<User> {
        return this.api.get<User>(this.baseUrl + '/me');
    }

}
