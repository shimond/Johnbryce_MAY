import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QA, UserAnswerStatus } from '../models/qa';

@Component({
    selector: 'app-qa-list',
    templateUrl: './qa-list.component.html',
    styleUrls: ['./qa-list.component.css']
})
export class QaListComponent implements OnInit {

    @Input() questions: Array<QA>;
    @Input() selectedQA: QA;
    @Output() selectQuestion = new EventEmitter<QA>();

    askForSelection(qa: QA) {
        this.selectQuestion.emit(qa);
    }

    GetUserAnswerStatus(question: QA): UserAnswerStatus {
        if (question.userAnswer === null || question.userAnswer === undefined) {
            return UserAnswerStatus.NotAnswerd;
        }
        if (question.userAnswer === question.correctAnswer) {
            return UserAnswerStatus.Correct;
        }
        return UserAnswerStatus.Incorrect;
    }

    constructor() { }

    ngOnInit() {
    }

}
