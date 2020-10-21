import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  },
  {
    path: 'payment-details',
    loadChildren: () => import('./payment-details/payment-details.module').then( m => m.PaymentDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
