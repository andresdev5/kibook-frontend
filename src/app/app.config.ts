import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { tokenInterceptor } from '@app/interceptors/token.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from '@app/interceptors/api.interceptor';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs, 'es');

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: LOCALE_ID, useValue: 'es' },
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes, withRouterConfig({
            onSameUrlNavigation: 'reload'
        })),
        provideHttpClient(
            withInterceptors([apiInterceptor, tokenInterceptor])
        )
    ]
};
