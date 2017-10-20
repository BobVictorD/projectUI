import { FaireService } from '../../services/modelService/faire.service';
import { ApiService } from '../../services/api.service';
import { Spot } from '../../../Model/Spot';
import { Activite } from '../../../Model/Activite';
import { Faire } from '../../../Model/Faire';
import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'accueil-page',
    templateUrl: 'accueil.page.html'
})
// tslint:disable-next-line:component-class-suffix
export class AccueilPage implements OnInit {

    faires: Array<Faire>;
    selectedFaire: Faire;
    selectedSpot: Spot;

    constructor(private faireServ: FaireService) {}


    ngOnInit(): void {
        this.faireServ.getByUser().subscribe(p => {
            this.faires = p;
        });
    }

    isUndefined(obj: any) {
        return obj === undefined;
    }

    selectFaire(event: Faire) {
        this.selectedFaire = event;
    }

    selectSite(event: Spot) {
        this.selectedSpot = event;
    }

}
