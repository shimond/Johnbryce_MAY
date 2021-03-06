import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameListComponent } from './name-list/name-list.component';
import { QuesionViewerComponent } from './quesion-viewer/quesion-viewer.component';
import { QaListComponent } from './qa-list/qa-list.component';
import { ExamComponent } from './exam/exam.component';
import { QAService } from './services/qa.service';
import { environment } from 'src/environments/environment.prod';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        NameListComponent,
        QuesionViewerComponent,
        QaListComponent,
        ExamComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule
    ],
    providers: [{
        provide: QAService,
        useClass:  QAService
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
