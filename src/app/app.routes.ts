import { Routes } from '@angular/router';
import { SplitPanelComponent } from './components/split-panel/split-panel.component';
import { GridTestComponent } from './grid-test/grid-test.component';
import { HomeComponent } from './home/home.component';
import { PanelContainerComponent } from './components/panel-container/panel-container.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'flights',
        loadChildren: () => import('./flights/flights.module')
            .then(m => m.FlightsModule)
    },
    {
        path: 'grid',
        component: GridTestComponent
    },
    {
        path: 'container',
        component: PanelContainerComponent
    }
];
