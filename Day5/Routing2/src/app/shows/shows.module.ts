import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsHomeComponent } from './components/shows-home/shows-home.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { SHOWS_ROUTES } from './shows.module.routing';
import { RouterModule } from '@angular/router';
import { More1Component } from './components/more1/more1.component';
import { More2Component } from './components/more2/more2.component';

@NgModule({
    declarations: [ShowsHomeComponent, ShowsListComponent, More1Component, More2Component],
    imports: [
        CommonModule,
        RouterModule.forChild(SHOWS_ROUTES)
    ]
})
export class ShowsModule { }
