import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';

@NgModule({
    // pipes, directives, components
    declarations: [
        AppComponent
    ],

    // add references (custome, 3rd party, ... Modules)
    imports: [
        BrowserModule,
        HttpClientModule,
        ProductsModule
    ],
    // Services
    // provide : = > use class : 
    providers: [],
    entryComponents: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
