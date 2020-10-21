import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFiltersPageRoutingModule } from './add-filters-routing.module';

import { AddFiltersPage } from './add-filters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFiltersPageRoutingModule
  ],
  declarations: [AddFiltersPage]
})
export class AddFiltersPageModule {}
