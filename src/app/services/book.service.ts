import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from '@app/models/book.model';

@Injectable({providedIn: 'root'})
export class BookService {
    constructor(private httpClient: HttpClient) { }
    
    getBooks(): Observable<BookModel[]> {
        return this.httpClient.get<BookModel[]>('/books');
    }
}