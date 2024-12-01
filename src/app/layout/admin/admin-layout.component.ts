import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    templateUrl: 'admin-layout.component.html',
    imports: [RouterOutlet],
})
export class AdminLayoutComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
