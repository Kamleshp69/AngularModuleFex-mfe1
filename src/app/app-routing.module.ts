import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsSearchComponent } from './flights/flights-search/flights-search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'flights/flights-search',
    component: FlightsSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
