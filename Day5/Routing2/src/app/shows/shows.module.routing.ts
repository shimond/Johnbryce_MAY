import { Route } from '@angular/router';
import { ShowsHomeComponent } from './components/shows-home/shows-home.component';
import { More1Component } from './components/more1/more1.component';
import { More2Component } from './components/more2/more2.component';

export const SHOWS_ROUTES: Route[] = [
    {
        path: '', component: ShowsHomeComponent, children: [
            { path: 'more1', pathMatch: 'full', component: More1Component },
            { path: 'more2', pathMatch: 'full', component: More2Component    }
        ]
    }

];
