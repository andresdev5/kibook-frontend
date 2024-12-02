import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { sidebarComponent } from "./sidebar/sidebar.component";

@Component({
    standalone: true,
    templateUrl: 'admin-layout.component.html',
    imports: [RouterOutlet, sidebarComponent, sidebarComponent, RouterLink],
})
export class AdminLayoutComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
