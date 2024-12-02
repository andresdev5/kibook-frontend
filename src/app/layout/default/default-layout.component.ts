import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    standalone: true,
    templateUrl: 'default-layout.component.html',
    imports: [
        RouterOutlet,
        NavbarComponent
    ],
})
export class DefaultLayoutComponent implements OnInit {
    constructor(private authService: AuthService) {}
    
    ngOnInit() { }

    logout() {
        this.authService.logout();
    }
}
