import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('@app/pages/books/books.routes').then(m => m.routes)
    },
    {
        path: 'admin',
        loadChildren: () => import('@app/pages/admin/admin.routes').then(m => m.routes)
    }
];
