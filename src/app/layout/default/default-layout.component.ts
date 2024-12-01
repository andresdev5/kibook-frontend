import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    templateUrl: 'default-layout.component.html',
    imports: [RouterOutlet],
})
export class DefaultLayoutComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
