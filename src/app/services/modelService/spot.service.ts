import { Spot } from '../../../Model/Spot';
import { ModelService } from './modelService';
import { ApiError } from '../../../Model/utils/ApiError';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpotService extends ModelService<Spot> {

    constructor(protected api: ApiService) {
        super('/spot');
    }

    getByActivite(id: number): Observable<Array<Spot>> {
        return this.api.get<Array<Spot>>(this.baseUrl + '/activite');
    }
}
