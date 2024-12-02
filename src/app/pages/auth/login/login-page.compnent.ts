import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { delay, lastValueFrom, Observable, of } from 'rxjs';

@Component({
    standalone: true,
    templateUrl: 'login-page.component.html',
    imports: [ReactiveFormsModule, CommonModule, RouterLink]
})
export class LoginPageComponent implements OnInit {
    form = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });
    error = '';
    submitting = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() { }

    async login() {
        if (this.form.invalid) {
            return;
        }

        const username = this.form.get('username')!.value!;
        const password = this.form.get('password')!.value!;
        this.submitting = true;

        this.authService.login(username, password).subscribe((response) => {
            setTimeout(() => {
                this.router.navigate(['/']);
            }, 300);
        }, (errorResponse: HttpErrorResponse) => {
            if (errorResponse.error.status === 401) {
                this.error = errorResponse.error.description ?? 'Credenciales inválidas';
            } else {
                this.error = 'Ha ocurrido un error inesperado';
            }
            this.submitting = false
        }, () => {
            this.submitting = false
            this.error = '';
        });
    }
}
