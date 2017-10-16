import { ActiviteService } from '../services/modelService/activite.service';
import { AuthGuard } from '../services/auth/authGuard.service';
import { AccueilPage } from '../pages/Accueil/accueil.page';
import { BrowserModule } from '@angular/platform-browser';
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
import { activityList } from './app.activityList';

@NgModule({
  declarations: [
    activityList,
    AccueilPage,
    SignInPage,
    HeaderPage,
    FooterPage,
    MasterPage
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpModule
  ],
  providers: [
    ActiviteService,
    HttpService,
    AuthGuard,
    AuthService,
    ApiService
  ],
  bootstrap: [MasterPage]
})
export class AppModule { }
