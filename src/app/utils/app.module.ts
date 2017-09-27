import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';

import { MasterPage } from '../pages/master.page';
import { FooterPage } from '../pages/footer.page';
import { HeaderPage } from '../pages/header.page';

import { SignInPage } from '../pages/auth/signIn.page';

@NgModule({
  declarations: [
    SignInPage,
    HeaderPage,
    FooterPage,
    MasterPage
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [MasterPage]
})
export class AppModule { }
