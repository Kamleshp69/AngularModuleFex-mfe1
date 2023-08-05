import { Routes } from '@angular/router';
import { SplitPanelComponent } from '../components/split-panel/split-panel.component';
import { GridTestComponent } from '../grid-test/grid-test.component';
import { FlightsSearchComponent } from './flights-search/flights-search.component';

export const FLIGHTS_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'flights-search',
      pathMatch: 'full'
    },
    {
      path: 'flights-search',
      component: FlightsSearchComponent
    },
    {
      path: 'grid',
      component: GridTestComponent
    }

];