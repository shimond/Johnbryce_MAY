import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';

@Component({
    selector: 'app-name-list',
    templateUrl: './name-list.component.html',
    styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {
    people: Array<Person> = [
        { id: 1, firstName: 'Tal', lastName: 'Dahan', age: 10 },
        { id: 2, firstName: 'Naama', lastName: 'Dahan', age: 14 }
    ];

    selectedPerson: Person = null;

    isOld(p: Person) {
        return p.age > 10;
    }

    selectPerson(p: Person) {
        this.selectedPerson = p;
    }

    constructor() { }

    ngOnInit() {
    }

}
