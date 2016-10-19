import { Component } from '@angular/core'

import { AuthService } from '../../services'

@Component({
    selector: 'app-bar',
    template: require('./app-bar.html'),
    styles: [require('./app-bar.css')]
})
export class AppBar {
    constructor(private authService: AuthService) {}

    signOut(): void {
        this.authService.signOut()
    }
}
