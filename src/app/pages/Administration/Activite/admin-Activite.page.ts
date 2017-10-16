import { ActiviteService } from '../../../services/modelService/activite.service';
import { Activite } from '../../../../Model/Activite';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'page-adminActivite',
  templateUrl: './admin-Activite.page.html'
})
// tslint:disable-next-line:component-class-suffix
export class AdminActivitePage implements OnInit {

  allActivity: Array<Activite>;
  userActivity: Array<Activite>;

  constructor(private activiteService: ActiviteService) {

  }

  ngOnInit(): void {
    this.activiteService.getAll().subscribe(p => {
      this.allActivity = p;
    });
    this.activiteService.getByUser().subscribe(p => {
      this.userActivity = p;
    });
  }

}
