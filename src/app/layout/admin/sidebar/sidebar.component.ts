import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterLink],
    selector: 'admin-layout-sidebar',
    templateUrl: 'sidebar.component.html'
})
export class sidebarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}