import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '@app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    standalone: true,
    templateUrl: 'register-page.component.html',
    imports: [ReactiveFormsModule, CommonModule, RouterLink],
})
export class RegisterPageComponent implements OnInit {
    form = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        birthDate: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        passwordConfirmation: new FormControl('', [Validators.required]),
    });
    error = '';
    submitting = false;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {}

    register() {
        if (this.form.invalid) {
            return;
        }

        const { username, email, birthDate, password, passwordConfirmation } = this.form.value;

        if (password !== passwordConfirmation) {
            this.error = 'Las contraseñas no coinciden';
            return;
        }

        this.submitting = true;
        this.authService.register({
            username: username!,
            email: email!,
            password: password!,
            passwordConfirmation: passwordConfirmation!,
        }).subscribe({
            next: () => {
                this.router.navigate(['/login']);
            },
            error: (errorResponse: HttpErrorResponse) => {
                this.error =
                    errorResponse.error?.message || 'Ha ocurrido un error al registrar al usuario';
                this.submitting = false;
            },
            complete: () => {
                this.submitting = false;
                this.error = '';
            }
        });
    }
}
