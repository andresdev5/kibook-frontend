import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorModel } from '@app/models/author.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthorService {
    constructor(private httpClient: HttpClient) {}

    getAuthors(): Observable<AuthorModel[]> {
        return this.httpClient.get<AuthorModel[]>('/authors');
    }
}
