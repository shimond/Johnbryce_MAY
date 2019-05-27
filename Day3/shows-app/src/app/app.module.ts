import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowsService } from './features/shows/services/shows.service';
import { ShowsModule } from './features/shows/shows.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ShowsModule
    ],
    providers: [
        // {provide:ShowsService, useClass:ShowsService}
        // as is
        ShowsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
