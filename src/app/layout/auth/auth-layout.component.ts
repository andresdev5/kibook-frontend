import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    templateUrl: 'auth-layout.component.html',
    imports: [RouterOutlet]
})
export class AuthLayoutComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
