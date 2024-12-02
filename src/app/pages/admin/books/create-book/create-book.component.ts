import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthorModel } from '@app/models/author.model';
import { GenreModel } from '@app/models/genre.model';
import { AuthorService } from '@app/services/author.service';
import { BookService } from '@app/services/book.service';
import { GenreService } from '@app/services/genre.service';

import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

interface AuthorAutocompleteItem extends AuthorModel {
    label: string;
}

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        CommonModule,
        AutoCompleteModule,
        ButtonModule,
        InputTextModule,
        InputMaskModule,
        InputTextareaModule,
        InputNumberModule,
        ToastModule
    ],
    providers: [MessageService],
    templateUrl: 'create-book.component.html',
    styleUrls: ['create-book.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CreateBookComponent implements OnInit {
    bookForm = new FormGroup({
        id: new FormControl(null, []),
        title: new FormControl('', [Validators.required]),
        isbn: new FormControl('', [Validators.required]),
        image: new FormControl('', []),
        synopsis: new FormControl('', [Validators.required]),
        publisher: new FormControl('', [Validators.required]),
        year: new FormControl(2024, [Validators.required]),
        stock: new FormControl(1, [Validators.required]),
        authors: new FormControl([], [Validators.required]),
        genres: new FormControl([], [Validators.required]),
    });
    filteredAuthors: AuthorAutocompleteItem[] = [];
    filteredGenres: GenreModel[] = [];
    genres: GenreModel[] = [];
    authors: AuthorModel[] = [];

    constructor(
        private genreService: GenreService,
        private authorService: AuthorService,
        private bookService: BookService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.genreService.getGenres().subscribe(genres => this.genres = genres);
        this.authorService.getAuthors().subscribe(authors => this.authors = authors);
    }

    submit() {
        this.bookForm.markAllAsTouched();

        if (this.bookForm.invalid) {
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Por favor, rellene todos los campos.'});
            return;
        }

        this.bookService.addBook({
            title: this.bookForm.value!.title!,
            isbn: this.bookForm.value!.isbn!,
            publisher: this.bookForm.value!.publisher!,
            year: this.bookForm.value!.year!,
            synopsis: this.bookForm.value!.synopsis!,
            genres: this.bookForm.value!.genres!,
            authors: this.bookForm.value!.authors!,
            stock: this.bookForm.value!.stock!,
        }).subscribe(() => {
            this.bookForm.reset();
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Libro añadido correctamente.'});
        });
    }

    searchAuthor(event: AutoCompleteCompleteEvent) {
        if (!event.query || event.query.trim() === '') {
            this.filteredAuthors = [];
            return;
        }

        this.filteredAuthors = this.authors.filter(author => {
            const matches = [
                (author.firstName ?? '').toLowerCase().trim(),
                (author.lastName ?? '').toLowerCase().trim(),
                (author.pseudonym ?? '').toLowerCase().trim()
            ].some(value => value.includes(event.query.toLowerCase().trim()));
            const duplicated = (this.bookForm.value.authors ?? []).some((a: AuthorModel) => a.id === author.id);

            return matches && !duplicated;
        }).map(author => ({
            ...author,
            label: `${author.firstName} ${author.lastName} (${author.pseudonym})`
        }));
    }

    searchGenre(event: AutoCompleteCompleteEvent) {
        if (!event.query || event.query.trim() === '') {
            this.filteredGenres = [];
            return;
        }

        this.filteredGenres = this.genres.filter(genre => genre.name.toLowerCase().includes(event.query.toLowerCase().trim()));
    }
}
