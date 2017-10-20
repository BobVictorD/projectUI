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

  faires: Array<Faire>;
  addFaire: Faire;
  detailFaire: Faire;

  popUpVisibility: Boolean = false;

  constructor(private faireService: FaireService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.faireService.getByUser().subscribe((p) => {
      this.faires = p;
    });
  }

  isUndefined(obj: any) {
    return obj === undefined;
  }

  showModal() {
    this.addFaire = new Faire();
    this.popUpVisibility = true;
  }

  showDetail(obj: Faire) {
    this.detailFaire = obj;
  }

  Addsubmit() {
    // console.log(JSON.stringify(this.activiteService));
    this.faireService.add(this.addFaire).subscribe((p) => {
      this.load();
    });
    this.addFaire = undefined;
    this.popUpVisibility = false;
  }

  delete() {
    this.faireService.delete(this.detailFaire.id).subscribe((p) => {
      this.load();
    });
    this.detailFaire = undefined;
  }

  update() {
    this.faireService.update(this.detailFaire).subscribe((p) => {
      this.load();
    });
    this.detailFaire = undefined;
  }

}
