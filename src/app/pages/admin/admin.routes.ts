import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/admin/admin-layout.component').then(m => m.AdminLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('@app/pages/admin/index/index-page.component').then(m => m.IndexPageComponent)
            },
            {
                path: 'books',
                children: [
                    {
                        path: 'create',
                        loadComponent: () => import('@app/pages/admin/books/create-book/create-book.component').then(m => m.CreateBookComponent)
                    },
                ]
            }
        ]
    }
];
