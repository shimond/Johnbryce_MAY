import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../model/show.model';
import { HttpClient } from '@angular/common/http';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ShowsService  {

    getAll(): Observable<Show[]> {
        return this.http.get<Show[]>('http://api.tvmaze.com/shows');
    }

    // dont forget to imports HttpClientModule in AppModule...
    constructor(private http: HttpClient) { }
}
