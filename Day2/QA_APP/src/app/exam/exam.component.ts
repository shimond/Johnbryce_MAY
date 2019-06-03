import { Component, OnInit } from '@angular/core';
import { QA, UserAnswerStatus } from '../models/qa';

@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
    qaList: Array<QA>;
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
        this.currentQA.userAnswer = ans;
        const index = this.qaList.findIndex(x => x === this.currentQA);
        setTimeout(() => {
            this.currentQA = this.qaList[index + 1];
        }, 500);
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
    constructor() {
        this.qaList = [
            {
                text: '2+7', options: ['9', '33', '5', '123'],
                correctAnswer: '9'
            },
            {
                text: '2+3', options: ['7', '33', '5', '123'],
                correctAnswer: '5'
            },
            {
                text: '22+3', options: ['7', '33', '5', '25'],
                correctAnswer: '25'
            },
            {
                text: '100 + 23', options: ['7', '33', '5', '123'],
                correctAnswer: '123'
            },
            {
                text: '11+22', options: ['7', '33', '5', '123'],
                correctAnswer: '33'
            }

        ];

    }

    ngOnInit() {
    }

}
