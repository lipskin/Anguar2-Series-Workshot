import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {
    JWT_KEY: string = 'retain_token'

    constructor(private router: Router) {}

    isAuthorized(): boolean {
        return !!localStorage.getItem(this.JWT_KEY)
    }

    canActivate(): boolean {
        const isAuth = this.isAuthorized()

        if (!isAuth) {
            this.router.navigate(['/auth'])
        }

        return isAuth
    }
}