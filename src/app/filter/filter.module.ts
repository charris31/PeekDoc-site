import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterPageRoutingModule } from './filter-routing.module';

import { FilterPage } from './filter.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [FilterPage]
})
export class FilterPageModule {}