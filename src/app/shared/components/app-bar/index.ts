import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'

import { AuthService } from '../../services'

@Component({
    selector: 'app-bar',
    template: require('./app-bar.html'),
    styles: [require('./app-bar.css')],
    directives: [
        ROUTER_DIRECTIVES,
    ],
})
export class AppBar {
    constructor(private authService: AuthService) {}

    signOut(): void {
        this.authService.signOut()
    }
}