import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'hello';
    isTitleChanged = false;
    changeTitle() {
        this.title = 'new title';
        this.isTitleChanged = true;
    }
}
