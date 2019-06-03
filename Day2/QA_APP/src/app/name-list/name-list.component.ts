import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../models/person';

@Component({
    selector: 'app-name-list',
    templateUrl: './name-list.component.html',
    styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {
    @Input() people: Array<Person> = [];
    @Input() title = '';

    @Input() selectedPerson: Person = null;

    @Output() personSelected = new EventEmitter<Person>();


    isOld(p: Person) {
        return p.age > 10;
    }

    selectPerson(p: Person) {
        // Raise
        this.personSelected.emit(p);
        // this.selectedPerson = p;
    }

    constructor() { }

    ngOnInit() {
    }

}
