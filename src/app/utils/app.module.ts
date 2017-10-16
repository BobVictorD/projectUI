import { TokenService } from '../services/auth/token.service';
import { AdminUserPage } from '../pages/Administration/User/admin-User.page';
import { AdminSpotPage } from '../pages/Administration/Spot/admin-Spot.page';
import { AdminPage } from '../pages/Administration/admin.page';
import { AdminActivitePage } from '../pages/Administration/Activite/admin-Activite.page';
import { ActiviteService } from '../services/modelService/activite.service';
import { AuthGuard } from '../services/auth/authGuard.service';
import { AccueilPage } from '../pages/Accueil/accueil.page';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouting } from './app.routing';

import { MasterPage } from '../pages/master.page';
import { FooterPage } from '../pages/footer.page';
import { HeaderPage } from '../pages/header.page';

import { SignInPage } from '../pages/auth/signIn.page';

import { HttpService } from '../services/http.service';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth/auth.service';

import {DataListModule} from 'primeng/primeng';
import {Header} from 'primeng/primeng';

@NgModule({
  declarations: [
    AdminActivitePage,
    AdminPage,
    AdminSpotPage,
    AdminUserPage,
    AccueilPage,
    SignInPage,
    HeaderPage,
    FooterPage,
    MasterPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    FormsModule,
    HttpModule,
    DataListModule
  ],
  providers: [
    ActiviteService,
    HttpService,
    AuthGuard,
    TokenService,
    AuthService,
    ApiService
  ],
  bootstrap: [MasterPage]
})
export class AppModule { }
