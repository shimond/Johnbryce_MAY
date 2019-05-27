import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QA, UserAnswerStatus } from '../models/qa';
import { QAService } from '../services/qa.service';

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
        return this.qaService.GetUserAnswerStatus(this.question);
    }

    setUserAnswer(option: string) {
        this.userAnswerd.emit(option);
    }

    constructor(private qaService: QAService) {

    }

    ngOnInit() {
    }

}
