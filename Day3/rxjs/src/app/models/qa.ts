export interface QA {
    text: string;
    options: string[];
    correctAnswer: string;
    userAnswer?: string;
}

export enum UserAnswerStatus {
    Correct = 'Correct', Incorrect = 'Incorrect', NotAnswerd = 'NotAnswerd'
}
