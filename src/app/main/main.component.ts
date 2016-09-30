import { Component, OnInit } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { AppBar } from '../shared/components/app-bar'

@Component({
    selector: 'main',
    template: require('./main.component.html'),
    directives: [
        ROUTER_DIRECTIVES,
        AppBar
    ]
})
export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
