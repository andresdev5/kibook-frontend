import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/default/default-layout.component').then(m => m.DefaultLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('@app/pages/books/index/index-page.component').then(m => m.IndexPageComponent)
            },
            {
                path: 'books',
                loadComponent: () => import('@app/pages/books/index/index-page.component').then(m => m.IndexPageComponent)
            }
        ]
    }
];
