import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subscription, Observable } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { url } from 'inspector';


@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

    op = '*';
    resultValue: Observable<number>;
    subsciber: Subscription;

    constructor(private currentRoute: ActivatedRoute) {
        console.log('ResultComponent created');
        // this.subsciber = combineLatest([currentRoute.params, currentRoute.queryParams])
        //     .pipe(
        //         debounceTime(20),
        //         map(([urlParams, queryParams]) => {
        //             const op = queryParams.op || '*';
        //             if (op === '*') {
        //                 return +urlParams.xValue * +urlParams.yValue;
        //             }
        //             return +urlParams.xValue + +urlParams.yValue;
        //         }),
        //         distinctUntilChanged())
        //     .subscribe(result => {
        //         this.resultValue = result;
        //     });


        this.resultValue = combineLatest([currentRoute.params, currentRoute.queryParams])
            .pipe(
                debounceTime(20),
                map(([urlParams, queryParams]) => {
                    const op = queryParams.op || '*';
                    if (op === '*') {
                        return +urlParams.xValue * +urlParams.yValue;
                    }
                    return +urlParams.xValue + +urlParams.yValue;
                }),
                distinctUntilChanged());

    }
    ngOnDestroy() {
        console.log('ResultComponent destroy');
        if (this.subsciber) {
            this.subsciber.unsubscribe();
        }

    }


    ngOnInit() {
    }

}
