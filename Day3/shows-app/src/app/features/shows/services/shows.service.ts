import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from '../models/show';
import { Observable } from 'rxjs';

@Injectable()
export class ShowsService {

    getShows(): Observable<Show[]> {
        return this.http.get<Show[]>('http://localhost:3000/shows');
    }
    constructor(private http: HttpClient) { }
}
