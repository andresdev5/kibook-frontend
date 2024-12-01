import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/admin/admin-layout.component').then(m => m.AdminLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('@app/pages/admin/index/index-page.component').then(m => m.IndexPageComponent)
            }
        ]
    }
];
