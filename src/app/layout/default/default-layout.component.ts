import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@app/services/auth.service';

@Component({
    standalone: true,
    templateUrl: 'default-layout.component.html',
    imports: [RouterOutlet],
})
export class DefaultLayoutComponent implements OnInit {
    constructor(private authService: AuthService) {}
    ngOnInit() { }
    logout() {
        this.authService.logout();
    }
}
