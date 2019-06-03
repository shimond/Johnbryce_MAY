import { Component } from '@angular/core';
import { Person } from './models/person';
import { QA } from './models/qa';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    question: QA = {
        text: '2+3', options: ['7', '33', '5', '123'],
        correctAnswer: '5'
    };

    constructor() {
    }

}
