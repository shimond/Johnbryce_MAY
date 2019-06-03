import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../model/show.model';

@Component({
    selector: 'app-shows-list',
    templateUrl: './shows-list.component.html',
    styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit {

    @Input() shows: Show[] = [];
    constructor() { }

    ngOnInit() {
    }

}
