import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
import { ApiError } from '../../../Model/utils/ApiError';

export abstract class ModelService<T> {
    protected api: ApiService;
    baseUrl: String;

    constructor(url: String) {
        this.baseUrl = url;
    }

    getAll(): Observable<Array<T>> {
        return this.api.get<Array<T>>(this.baseUrl);
    }

    add(obj: T): Observable<T> {
        return this.api.post<T, T>(this.baseUrl, obj);
    }

    getOne(id: number): Observable<T> {
        return this.api.get<T>(this.baseUrl + '/' + id);
    }
}
