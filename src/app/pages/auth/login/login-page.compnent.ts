import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';

@Component({
    standalone: true,
    templateUrl: 'login-page.component.html'
})
export class LoginPageComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() { }

    login() {
        this.authService.login('admin', 'admin').subscribe(() => {
            this.router.navigate(['/']);
        });
    }
}
