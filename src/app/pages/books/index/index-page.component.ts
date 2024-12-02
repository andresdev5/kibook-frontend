import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from '@app/models/book.model';
import { TruncateTextPipe } from '@app/pipes/truncate-text.pipe';
import { environment } from '@env/environment';

@Component({
    standalone: true,
    templateUrl: 'index-page.component.html',
    imports: [
        TruncateTextPipe,
        DatePipe
    ]
})
export class IndexPageComponent implements OnInit {
    books: BookModel[] = [];
    apiUrl: string = environment.apiUrl;

    constructor(
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.books = data['books'];
        });
    }
}
