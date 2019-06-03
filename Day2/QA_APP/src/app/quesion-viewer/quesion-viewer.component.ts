import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QA, UserAnswerStatus } from '../models/qa';

@Component({
    selector: 'app-quesion-viewer',
    templateUrl: './quesion-viewer.component.html',
    styleUrls: ['./quesion-viewer.component.css']
})
export class QuesionViewerComponent implements OnInit {

    @Input()
    question: QA;

    @Output()
    userAnswerd = new EventEmitter<string>();

    isQuestionLocked() {
        const answerStatus = this.GetUserAnswerStatus();
        if (answerStatus !== UserAnswerStatus.NotAnswerd) {
            return true;
        }
        return false;
    }

    GetUserAnswerStatus(): UserAnswerStatus {
        if (this.question.userAnswer === null || this.question.userAnswer === undefined) {
            return UserAnswerStatus.NotAnswerd;
        }
        if (this.question.userAnswer === this.question.correctAnswer) {
            return UserAnswerStatus.Correct;
        }
        return UserAnswerStatus.Incorrect;
    }

    setUserAnswer(option: string) {
        this.userAnswerd.emit(option);
    }

    constructor() {

    }

    ngOnInit() {
    }

}
