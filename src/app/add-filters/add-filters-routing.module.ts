import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFiltersPage } from './add-filters.page';

const routes: Routes = [
  {
    path: '',
    component: AddFiltersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFiltersPageRoutingModule {}
