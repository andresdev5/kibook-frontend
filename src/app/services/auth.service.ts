import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { AuthResponseModel } from '@app/models/auth-response.model';
import { UserModel } from '@app/models/user.model';
import { TokenUserModel } from '@app/models/token-user.model';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
    #router = inject(Router);

    constructor(private httpClient: HttpClient) {
        if (this.isTokenExpired() || !this.decodeToken()) {
            this.removeToken();
        }
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    removeToken() {
        localStorage.removeItem('token');
    }

    decodeToken(): { [key: string]: any } | null {
        const token = this.getToken();

        if (!token) {
            return null;
        }

        try {
            return jwtDecode(token);
        } catch (error) {
            return null;
        }
    }

    isTokenExpired(): boolean {
        const token = this.getToken();

        if (!token) {
            return true;
        }

        const decodedToken = jwtDecode(token);

        if (!decodedToken.exp) {
            return true;
        }

        const expirationDate = new Date(decodedToken.exp * 1000);
        return expirationDate < new Date();
    }

    currentUser(): TokenUserModel | null {
        const token = this.getToken();

        if (this.isTokenExpired() || !token) {
            return null;
        }

        const decodedToken = this.decodeToken();

        if (!decodedToken) {
            return null;
        }

        return {
            id: decodedToken['id'],
            username: decodedToken['username'],
            email: decodedToken['email'],
            role: decodedToken['role'],
            permissions: decodedToken['permissions'] ?? []
        };
    }

    hasPermission(permission: string): boolean {
        const user = this.currentUser();

        if (!user) {
            return false;
        }

        return user.permissions.includes(permission);
    }

    isLoggedIn(): boolean {
        return this.currentUser() !== null;
    }

    login(username: string, password: string): Observable<AuthResponseModel> {
        const response = this.httpClient.post<AuthResponseModel>('/auth/login', { username, password });

        response.subscribe((authResponse) => {
            this.setToken(authResponse.token);
        });

        return response;
    }

    logout() {
        this.removeToken();
        this.#router.navigate(['/login']);
    }
}
