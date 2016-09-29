import { RouterConfig } from '@angular/router'
import { Home } from './home'
import { About } from './about'
import { AuthComponent } from './auth'
import { MainComponent } from './main'
import { AuthService } from './shared/services'

export const router: RouterConfig = [
    {
        path: '',
        component: MainComponent,
        canActivate: [ AuthService ],
        children: [
            { path: '', component: Home },
            { path: 'about', component: About },
        ]
    },
    { path: 'auth', component: AuthComponent },
    { path: '**', redirectTo: '' },
]
