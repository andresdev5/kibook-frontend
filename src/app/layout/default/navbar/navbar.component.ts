import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TokenUserModel } from '@app/models/token-user.model';
import { AuthService } from '@app/services/auth.service';

@Component({
    standalone: true,
    selector: 'default-layout-navbar',
    templateUrl: 'navbar.component.html',
    imports: [RouterLink]
})
export class NavbarComponent implements OnInit {
    loggedUser: TokenUserModel | null = null;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.loggedUser = this.authService.currentUser();
    }

    logout() {
        this.authService.logout();
    }
}