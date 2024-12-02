import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/auth/auth-layout.component').then(m => m.AuthLayoutComponent),
        children: [
            {
                path: 'login',
                loadComponent: () => import('@app/pages/auth/login/login-page.compnent').then(m => m.LoginPageComponent),
            },
            {
                path: 'register',
                loadComponent: () => import('@app/pages/auth/register/register-page.component').then(m => m.RegisterPageComponent),
            }
        ]
    }
];
