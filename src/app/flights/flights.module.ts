
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { GridTestComponent } from '../grid-test/grid-test.component';
import {  AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
    AgGridModule
  ],
  declarations: [
    FlightsSearchComponent,
    GridTestComponent,  ]
})
export class FlightsModule { }

