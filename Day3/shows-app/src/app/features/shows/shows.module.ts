import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsRootComponent } from './components/shows-root/shows-root.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';

@NgModule({
    declarations: [ShowsRootComponent, ShowsListComponent],
    exports: [ShowsRootComponent],
    imports: [
        CommonModule
    ]
})
export class ShowsModule { }
