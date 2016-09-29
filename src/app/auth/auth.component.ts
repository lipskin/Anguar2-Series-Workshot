import { Component, OnInit } from '@angular/core'
import { AuthService } from '../shared/services/auth.service'
import { Router } from '@angular/router'

const linkTexts = {
    signin: `Don't have an account?`,
    signup: `Already have an account?`,
}

@Component({
    selector: 'auth',
    template: require('./auth.component.html'),
    styles: [require('./auth.component.css')]
})
export class AuthComponent implements OnInit {
    user: { email: string, password: string }
    mode: 'signin' | 'signup'
    linkText: string

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.user = { email: '', password: '' }
        this.mode = 'signin'
        this.linkText = linkTexts.signin
    }

    changeMode(): void {
        if (this.mode === 'signin') {
            this.mode = 'signup'
            this.linkText = linkTexts.signup
        } else {
            this.mode = 'signin'
            this.linkText = linkTexts.signin
        }
    }

    authenticate(): void {
        this.authService.authenticate(this.mode, this.user)
            .subscribe(() => this.router.navigate(['/']))
    }
}
