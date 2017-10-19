import { Spot } from '../../../../Model/Spot';
import { SpotService } from '../../../services/modelService/spot.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'page-adminSpot',
  templateUrl: './admin-Spot.page.html'
})
// tslint:disable-next-line:component-class-suffix
export class AdminSpotPage implements OnInit {

  allSpots: Array<Spot> = [];
  detailSpot: Spot;
  popUpSpot: Spot;
  popUpVisibility: Boolean = false;

  constructor(private spotService: SpotService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.spotService.getAll().subscribe(p => {
      this.allSpots = p;
    });
  }

  isUndefined(obj: any) {
    return obj === undefined;
  }

  showDetail(detail: Spot) {
    this.detailSpot = detail;
  }

  showModal() {
    this.popUpSpot = new Spot();
    this.popUpVisibility = true;
  }

  Addsubmit() {
    this.popUpVisibility = false;
    this.spotService.add(this.popUpSpot).subscribe(() => {
      this.load();
    });
    this.popUpSpot = undefined;
  }

  delete() {
    this.spotService.delete(this.detailSpot.id).subscribe(() => {
      this.load();
    });
    this.detailSpot = undefined;
  }
}
