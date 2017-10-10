import { ModelService } from './modelService';
import { ApiError } from '../../../Model/utils/ApiError';
import { Activite } from '../../../Model/Activite';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActiviteService extends ModelService<Activite> {

    constructor(protected api: ApiService) {
        super('/activite');
    }


    getByUser(): Observable<Array<Activite> | ApiError> {
        return this.api.get<Array<Activite>>(this.baseUrl + '/user');
    }

}
