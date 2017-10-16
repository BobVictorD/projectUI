import { Injectable } from '@angular/core';
import { Headers} from '@angular/http';

@Injectable()
export class TokenService {

    private token: String = null;
    private headers: Headers = null;

    constructor() {}

    setToken(token: String ) {
        this.token = token;
        this.geneHeader();
    }

    getToken() {
        return this.token;
    }

    getHeader(): Headers {
      return this.headers;
    }

    private geneHeader() {
      const value: String = 'Bearer ' + this.token;
      this.headers = new Headers({'authorization': value });
    }

    hasToken(): Boolean {
        return this.token != null;
    }

}
