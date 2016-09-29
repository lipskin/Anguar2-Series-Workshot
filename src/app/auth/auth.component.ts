import { Component, OnInit } from '@angular/core'

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

    constructor() { }

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
}
