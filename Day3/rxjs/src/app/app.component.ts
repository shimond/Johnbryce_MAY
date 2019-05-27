import { Component } from '@angular/core';
import { Person } from './models/person';
import { QA, UserAnswerStatus } from './models/qa';
import { QAService } from './services/qa.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    count = 0;
    totalCount = 0;
    constructor(private qaService: QAService) {
        qaService.questions$.subscribe(all => {
            this.count = all
                .filter(question => qaService.GetUserAnswerStatus(question) === UserAnswerStatus.Correct)
                .length;

            this.totalCount = all.length;
        });
    }

    addNew() {
        this.qaService.addNewQuestion();
    }

}
