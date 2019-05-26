import { Component, OnInit } from '@angular/core';
import { QA, UserAnswerStatus } from '../models/qa';

@Component({
    selector: 'app-quesion-viewer',
    templateUrl: './quesion-viewer.component.html',
    styleUrls: ['./quesion-viewer.component.css']
})
export class QuesionViewerComponent implements OnInit {

    userAnswer = null;
    isQuestionLocked = false;
    question: QA = {
        text: '2+2',
        options: ['1', '6', '4'],
        correctAnswer: '4'
    };

    GetUserAnswerStatus(): UserAnswerStatus {
        if (this.userAnswer === null) {
            return UserAnswerStatus.NotAnswerd;
        }
        if (this.userAnswer === this.question.correctAnswer) {
            return UserAnswerStatus.Correct;
        }
        return UserAnswerStatus.Incorrect;
    }

    setUserAnswer(option: string) {
        this.userAnswer = option;
        this.isQuestionLocked = true;
    }
    constructor() { }

    ngOnInit() {
    }

}
