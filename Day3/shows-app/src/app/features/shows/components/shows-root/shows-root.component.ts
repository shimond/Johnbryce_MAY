import { Component, OnInit } from '@angular/core';
import { Show } from '../../models/show';
import { ShowsService } from '../../services/shows.service';

@Component({
    selector: 'app-shows-root',
    templateUrl: './shows-root.component.html',
    styleUrls: ['./shows-root.component.css']
})
export class ShowsRootComponent implements OnInit {
    showsFromRootComponent: Show[] = [];
    constructor(private showService: ShowsService) {
        showService.getShows().subscribe(res => {
            this.showsFromRootComponent = res;
        });
    }

    ngOnInit() {
    }

}
