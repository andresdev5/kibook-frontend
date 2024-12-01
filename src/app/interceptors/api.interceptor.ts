import { HttpEvent, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

export function apiInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const baseUrl = request.url.startsWith('http') ? '' : `${environment.apiUrl}${request.url.startsWith('/') ? '' : '/'}`;

    return next(request.clone({
        url: `${baseUrl}${request.url}`
    }));
}
