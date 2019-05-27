import { QA, UserAnswerStatus } from '../models/qa';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// install json-server
// 1. npm i json-server -g
// 2. json-server c:\AngularCourse\db.json

@Injectable()
export class QAService {
    private questions: QA[];

    questions$ = new BehaviorSubject<QA[]>([]);
    addNewQuestion() {
        this.questions.push({
            text: '100 + 100', options: ['9', '200', '5', '123'],
            correctAnswer: '200'
        });
        this.questions$.next([...this.questions]);
        // this.questions$.next(this.questions);
    }

    updateUserAnswer(qa: QA, userAnswer: string) {
        const qaToUpdate = this.questions.find(x => x === qa);
        qaToUpdate.userAnswer = userAnswer;
        this.questions$.next([...this.questions]);
    }

    initQuestions() {
        console.log('initQuestions invoked.');
        this.http.get<QA[]>('http://localhost:3000/questions').subscribe(result => {
            this.questions = result;
            this.questions$.next(this.questions);
        });
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

    // getAllQuestions(): Array<QA> {
    //     return this.questions;
    // }

    constructor(private http: HttpClient) {
        this.initQuestions();
    }
}

