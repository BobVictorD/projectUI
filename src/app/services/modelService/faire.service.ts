import { Faire } from '../../../Model/Faire';
import { ModelService } from './modelService';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FaireService extends ModelService<Faire> {

    constructor(protected api: ApiService) {
        super('/faire');
    }
}
