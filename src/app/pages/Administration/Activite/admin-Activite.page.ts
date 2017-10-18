import { FaireService } from '../../../services/modelService/faire.service';
import { Faire } from '../../../../Model/Faire';
import { SpotService } from '../../../services/modelService/spot.service';
import { ActiviteService } from '../../../services/modelService/activite.service';
import { Activite } from '../../../../Model/Activite';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'page-adminActivite',
  templateUrl: './admin-Activite.page.html'
})
// tslint:disable-next-line:component-class-suffix
export class AdminActivitePage implements OnInit {

  allActivity: Array<SelectItem> = [];
  userActivity: Array<Activite>;
  selectedSpot: Array<SpotService> = [];

  addActivity: Faire;

  popUpVisibility: Boolean = false;

  constructor(private activiteService: ActiviteService, private faireService: FaireService) {

  }

  isUndefined(obj: any) {
    return obj === undefined;
  }

  showModal() {
    this.addActivity = new Faire();
    this.popUpVisibility = true;
  }

  Addsubmit() {
    console.log(this.addActivity);
    console.log(JSON.stringify(this.activiteService));
    // this.faireService.add(this.addActivity).subscribe();
    this.popUpVisibility = false;
    this.addActivity = undefined;
  }

  ngOnInit(): void {
    this.activiteService.getAll().subscribe(p => {
      p.forEach(item => {
        this.allActivity.push({label: item.libelle.toString(), value: item});
      });
    });
    this.activiteService.getByUser().subscribe(p => {
      this.userActivity = p;
    });
  }

}
