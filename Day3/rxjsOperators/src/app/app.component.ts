import { Component } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinct, distinctUntilChanged } from 'rxjs/operators';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'playWithRxjs';
    test = new Subject<number>();

    constructor() {
        this.test
            .pipe(
                map(o => o * 3),
                distinct(),
                distinctUntilChanged(),
                filter(x => x % 2 === 0))
            .subscribe(x => {
                console.log('Current value = ' + x);
            }, e => {
                console.log('error');
            }, () => {
                alert('completed');
            });

        let count = 0;
        setInterval(() => {
            count++;
            this.test.next(count);
        }, 1000);


    }

}
