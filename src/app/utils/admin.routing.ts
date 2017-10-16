import { AdminSpotPage } from '../pages/Administration/Spot/admin-Spot.page';
import { AdminActivitePage } from '../pages/Administration/Activite/admin-Activite.page';
import { AdminUserPage } from '../pages/Administration/User/admin-User.page';
import { AdminPage } from '../pages/Administration/admin.page';
import { AuthGuard } from '../services/auth/authGuard.service';
import { AccueilPage } from '../pages/Accueil/accueil.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInPage } from '../pages/auth/signIn.page';


const adminroutes: Routes = [
  { path: 'Admin', component: AdminPage , canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'User', pathMatch: 'full'},
    { path: 'User', component: AdminUserPage, canActivate: [AuthGuard]},
    { path: 'Activite', component: AdminActivitePage, canActivate: [AuthGuard]},
    { path: 'Spot', component: AdminSpotPage, canActivate: [AuthGuard]}
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(adminroutes)],
  exports: [ RouterModule ]
})
export class AdminRouting {}
