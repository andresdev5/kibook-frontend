import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    templateUrl: 'default-layout.component.html',
    standalone: true,
    imports: [RouterOutlet],
})
export class DefaultLayoutComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
