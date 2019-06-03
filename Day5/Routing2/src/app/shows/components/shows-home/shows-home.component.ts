import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../services/shows.service';
import { Observable } from 'rxjs';
import { Show } from '../../model/show.model';

@Component({
    selector: 'app-shows-home',
    templateUrl: './shows-home.component.html',
    styleUrls: ['./shows-home.component.scss']
})
export class ShowsHomeComponent implements OnInit {

    showList$: Observable<Show[]>;
    constructor(private showService: ShowsService) {
        this.showList$ = this.showService.getAll();
    }
    ngOnInit() {
    }

}
