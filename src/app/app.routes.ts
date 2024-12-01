import { Routes } from '@angular/router';
import { authGuard, loggedInGuard } from '@app/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        canActivate: [authGuard],
        children: [
            {
                path: '',
                loadChildren: () => import('@app/pages/books/books.routes').then(m => m.routes)
            },
            {
                path: 'admin',
                loadChildren: () => import('@app/pages/admin/admin.routes').then(m => m.routes)
            }
        ]
    },
    {
        path: '',
        canActivate: [loggedInGuard],
        loadChildren: () => import('@app/pages/auth/auth.routes').then(m => m.routes)
    }
];
