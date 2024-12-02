import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    standalone: true,
    imports: [RouterLink, FontAwesomeModule],
    selector: 'admin-layout-sidebar',
    templateUrl: 'sidebar.component.html'
})
export class sidebarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
