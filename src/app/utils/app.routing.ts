import { AdminSpotPage } from '../pages/Administration/Spot/admin-Spot.page';
import { AdminActivitePage } from '../pages/Administration/Activite/admin-Activite.page';
import { AdminUserPage } from '../pages/Administration/User/admin-User.page';
import { AdminPage } from '../pages/Administration/admin.page';
import { AuthGuard } from '../services/auth/authGuard.service';
import { AccueilPage } from '../pages/Accueil/accueil.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInPage } from '../pages/auth/signIn.page';


const routes: Routes = [
  { path: '', redirectTo: '/SignIn', pathMatch: 'full' },
  { path: 'Accueil', component: AccueilPage, canActivate: [AuthGuard] },
  { path: 'SignIn', component: SignInPage},
  { path: 'Admin', component: AdminPage , children: [
    { path: '', redirectTo: 'User', pathMatch: 'full' },
    { path: 'User', component: AdminUserPage},
    { path: 'Activite', component: AdminActivitePage},
    { path: 'Spot', component: AdminSpotPage}
  ]}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
