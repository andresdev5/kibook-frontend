import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { BookService } from '@app/services/book.service';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/default/default-layout.component').then(m => m.DefaultLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('@app/pages/books/index/index-page.component').then(m => m.IndexPageComponent),
                resolve: {
                    books: () => inject(BookService).getBooks()
                },
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'books',
                loadComponent: () => import('@app/pages/books/index/index-page.component').then(m => m.IndexPageComponent),
                resolve: {
                    books: () => inject(BookService).getBooks()
                },
                runGuardsAndResolvers: 'always'
            }
        ]
    }
];
