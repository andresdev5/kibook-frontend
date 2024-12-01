import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { tokenInterceptor } from '@app/interceptors/token.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from '@app/interceptors/api.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(
            withInterceptors([apiInterceptor, tokenInterceptor])
        )
    ]
};
