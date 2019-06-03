import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'useRoutes';

    navigateToAbout() {
        // products/{{company}}/{{category}}/edit/{{catId}}
        this.router.navigate(['/about']);
    }

    constructor(private router: Router) {

    }
}
