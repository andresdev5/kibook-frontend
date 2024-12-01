import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'selector-name',
    templateUrl: 'admin-layout.component.html',
    standalone: true,
    imports: [RouterOutlet],
})
export class AdminLayoutComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
