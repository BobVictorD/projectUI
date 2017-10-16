import { AdminRouting } from './admin.routing';
import { AdminUserPage } from '../pages/Administration/User/admin-User.page';
import { AdminSpotPage } from '../pages/Administration/Spot/admin-Spot.page';
import { AdminPage } from '../pages/Administration/admin.page';
import { AdminActivitePage } from '../pages/Administration/Activite/admin-Activite.page';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataListModule, InputTextModule } from 'primeng/primeng';



@NgModule({
  declarations: [
    AdminActivitePage,
    AdminPage,
    AdminSpotPage,
    AdminUserPage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AdminRouting,
    DataListModule,
    InputTextModule
  ]
})
export class AdminModule { }
