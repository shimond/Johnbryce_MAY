import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-kefel-board',
    templateUrl: './kefel-board.component.html',
    styleUrls: ['./kefel-board.component.scss']
})
export class KefelBoardComponent implements OnInit {

    values: Array<{ x: number, y: number }> = [];
    constructor(private router: Router) {
        for (let index1 = 1; index1 < 8; index1++) {
            for (let index2 = 1; index2 < 8; index2++) {
                this.values.push({ x: index1, y: index2 });
            }
        }
    }

    goToResult(x: number, y: number, op: string) {
        this.router.navigate(['result', x, y], { queryParams: { op, test: 'A' } });
        // result/x/y
    }
    ngOnInit() {
    }

}
