import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameListComponent } from './name-list/name-list.component';
import { QuesionViewerComponent } from './quesion-viewer/quesion-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NameListComponent,
    QuesionViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
