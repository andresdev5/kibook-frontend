import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenreModel } from '@app/models/genre.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GenreService {
    constructor(private httpClient: HttpClient) {}

    getGenres(): Observable<GenreModel[]> {
        return this.httpClient.get<GenreModel[]>('/genres');
    }
}
