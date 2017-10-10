import { ApiService } from '../services/api.service';
import { HttpService } from '../services/http.service';
import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'master-page',
  templateUrl: './master.page.html',
  providers: [HttpService, ApiService]
})
// tslint:disable-next-line:component-class-suffix
export class MasterPage {
}
