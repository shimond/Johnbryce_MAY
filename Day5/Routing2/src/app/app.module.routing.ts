import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KefelBoardComponent } from './kefel-board/kefel-board.component';
import { ResultComponent } from './result/result.component';


export const APP_ROUTES: Route[] = [
    { path: 'home', component: HomeComponent, canActivate: [], canDeactivate:[] },
    { path: 'about', component: AboutComponent },
    { path: 'kefel', component: KefelBoardComponent },
    { path: 'result/:xValue/:yValue', component: ResultComponent },
    { path: 'shows', loadChildren: './shows/shows.module#ShowsModule' },
    { path: '', pathMatch: 'full', redirectTo: 'home' }

];
