import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { IStaticMethods } from 'flyonui/flyonui';

declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'kibook';

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.router.events.subscribe((ev: any) => {
            if (ev instanceof NavigationEnd) {
                setTimeout(() => {
                    window.HSStaticMethods.autoInit();
                }, 100);
            }
        });
    }
}
