import { ActiviteService } from '../../services/modelService/activite.service';
import { SpotService } from '../../services/modelService/spot.service';
import { ApiService } from '../../services/api.service';
import { Spot } from '../../../Model/Spot';
import { Activite } from '../../../Model/Activite';
import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'accueil-page',
    templateUrl: 'accueil.page.html'
})
// tslint:disable-next-line:component-class-suffix
export class AccueilPage implements OnInit {

    constructor(private actServ: ActiviteService, private spotServ: SpotService) {

    }

    activites: Array<Activite>;
    sites: Array<Spot>;

    selectedAct: Activite;
    selectedSite: Spot;

    isUndefined(obj:any){
        return obj==undefined;
    }

    surClick(event:any){
        console.log("Onclick");
        this.selectedAct = event;
        this.spotServ.getByActivite( this.selectedAct.id ).subscribe(p => {
            this.sites = p;
          });
    }

    ngOnInit(): void {
        this.actServ.getByUser().subscribe(p => {
            this.activites = p;
          });
        /*this.spotServ.getByActivite( this.selectedAct.id ).subscribe(p => {
            this.sites = p;
          });*/
    }

}
