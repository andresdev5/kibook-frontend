import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthResponseModel } from '@app/models/auth-response.model';
import { AuthService } from '@app/services/auth.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'kibook';

    constructor(private authService: AuthService) {
        console.log('App component created');
    }

    ngOnInit() {
        this.authService.login('admin', 'admin').subscribe((user: AuthResponseModel) => {
            console.log('Logged in', user);
        });
    }
}
