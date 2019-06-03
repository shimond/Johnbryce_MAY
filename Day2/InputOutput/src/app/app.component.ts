import { Component } from '@angular/core';
import { Person } from './models/person';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {


    peopleListFromAppComponent: Array<Person> = [
        { id: 1, firstName: 'Tal', lastName: 'Dahan', age: 10 },
        { id: 2, firstName: 'Naama', lastName: 'Dahan', age: 14 }
    ];

    selectedPersonFromAppComponent: Person;


    setSelectedPerson(p: Person) {
        // alert(p.firstName);
        this.selectedPersonFromAppComponent = p;
    }

    constructor() {
        this.selectedPersonFromAppComponent = this.peopleListFromAppComponent[1];
    }

}
