import { ErrorService } from '../services/error.service';
import { ApiService } from '../services/api.service';
import { HttpService } from '../services/http.service';
import { Component , OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Message } from 'primeng/components/common/message';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'master-page',
  templateUrl: './master.page.html',
  providers: [HttpService, ApiService]
})
// tslint:disable-next-line:component-class-suffix
export class MasterPage implements OnInit {
  msgs: Message[] = [];

  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.errorService.getErrorObs().subscribe(p => {
      this.msgs.push(p);
    });
  }

}
