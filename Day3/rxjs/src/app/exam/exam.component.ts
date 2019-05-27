import { Component, OnInit } from '@angular/core';
import { QA, UserAnswerStatus } from '../models/qa';
import { QAService } from '../services/qa.service';

@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
    qaList: Array<QA> = [];
    currentQA: QA;

    getGrade() {
        return this.getCorrectCount() / this.qaList.length * 100;
    }

    getCorrectCount() {
        return this.qaList
            .filter(x => this.GetUserAnswerStatus(x) === UserAnswerStatus.Correct)
            .length;
    }

    selectQA(question: QA) {
        this.currentQA = question;
    }

    setUserAnswer(ans: string) {
        // this.currentQA.userAnswer = ans;
        this.service.updateUserAnswer(this.currentQA, ans);
        const index = this.qaList.findIndex(x => x === this.currentQA);
        setTimeout(() => {
            this.currentQA = this.qaList[index + 1];
        }, 500);
    }

    GetUserAnswerStatus(question: QA): UserAnswerStatus {
        return this.service.GetUserAnswerStatus(question);
    }

    constructor(private service: QAService) {
        this.service.questions$.subscribe(list => {
            this.qaList = list;
        });
    }

    ngOnInit() {
    }

}
