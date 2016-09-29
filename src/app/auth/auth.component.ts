import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'auth',
    template: require('./auth.component.html'),
    styles: [require('./auth.component.css')]
})
export class AuthComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
