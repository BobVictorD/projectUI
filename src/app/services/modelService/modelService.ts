import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
import { ApiError } from '../../../Model/utils/ApiError';

export abstract class ModelService<T> {
    protected api: ApiService;
    baseUrl: String;

    constructor(url: String) {
        this.baseUrl = url;
    }

    getAll(): Observable<Array<T> | ApiError> {
        return this.api.get<Array<T>>(this.baseUrl);
    }

    getOne(id: number): Observable<T | ApiError> {
        return this.api.get<T>(this.baseUrl + '/' + id);
    }
}
