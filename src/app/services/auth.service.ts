import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponseModel } from '@app/models/auth-response.model';

@Injectable({providedIn: 'root'})
export class AuthService {
    private loggedIn: boolean = false;

    constructor(private httpClient: HttpClient) {}

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    login(username: string, password: string): Observable<AuthResponseModel> {
        return this.httpClient.post<AuthResponseModel>('http://localhost:/auth/login', { username, password });
    }
}
