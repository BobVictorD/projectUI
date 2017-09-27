import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInPage } from '../pages/auth/signIn.page';


const routes: Routes = [
  { path: '', redirectTo: '/SignIn', pathMatch: 'full' },
  { path: 'SignIn', component: SignInPage}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
