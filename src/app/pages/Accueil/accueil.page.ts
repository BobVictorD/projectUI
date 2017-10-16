import { ActiviteService } from '../../services/modelService/activite.service';
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

    constructor(private actServ: ActiviteService) {

    }

    activites: Array<Activite> = [];
    sites: Array<Spot> = [];

    selectedAct: Activite;
    selectedSite: Spot;


    ngOnInit(): void {
    }

}
