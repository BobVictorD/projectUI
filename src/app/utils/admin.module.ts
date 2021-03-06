import { MapComponent } from '../components/map.component';
import { ActiviteDetailComponent } from '../components/activité-detail.component';
import { SpotDetailComponent } from '../components/spot-detail.component';
import { SpotModifComponent } from '../components/spot-modif.component';
import { NiveauComponent } from '../components/niveau.component';
import { AdminRouting } from './admin.routing';
import { AdminUserPage } from '../pages/Administration/User/admin-User.page';
import { AdminSpotPage } from '../pages/Administration/Spot/admin-Spot.page';
import { AdminPage } from '../pages/Administration/admin.page';
import { AdminActivitePage } from '../pages/Administration/Activite/admin-Activite.page';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataListModule, InputTextModule, DialogModule, FieldsetModule } from 'primeng/primeng';
import { SliderModule, PickListModule, DropdownModule, ButtonModule, PanelModule } from 'primeng/primeng';
import { GMapModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AdminActivitePage,
    AdminPage,
    AdminSpotPage,
    AdminUserPage,
    NiveauComponent,
    SpotModifComponent,
    SpotDetailComponent,
    ActiviteDetailComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRouting,
    DataListModule,
    InputTextModule,
    DialogModule,
    FieldsetModule,
    PickListModule,
    DropdownModule,
    SliderModule,
    ButtonModule,
    PanelModule,
    GMapModule
  ]
})
export class AdminModule { }
