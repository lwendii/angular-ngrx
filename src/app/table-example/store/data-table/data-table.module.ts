import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableEffects } from './data-table.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromReducer from './data-table.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromReducer.dataTableFeatureKey,
      fromReducer.DataTableReducer
    ),
    EffectsModule.forFeature([DataTableEffects]),
  ],
})
export class DataTableModule {}
