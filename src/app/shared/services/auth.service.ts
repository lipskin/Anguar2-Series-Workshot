import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import { ApiService } from './api'

@Injectable()
export class AuthGuard implements CanActivate {
    JWT_KEY: string = 'retain_token'

    constructor(
        private router: Router,
        private apiService: ApiService
    ) {
        this.setJWT(localStorage.getItem(this.JWT_KEY))
    }

    setJWT(jwt: string) {
        localStorage.setItem(this.JWT_KEY, jwt)
        this.apiService.setHeaders({
            'Authorization': `Bearer ${jwt}`
        })
    }

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