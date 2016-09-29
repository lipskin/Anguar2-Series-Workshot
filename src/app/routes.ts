import { RouterConfig } from '@angular/router'
import { Home } from './home'
import { About } from './about'
import { AuthComponent } from './auth'
import { MainComponent } from './main'

export const router: RouterConfig = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', component: Home },
            { path: 'about', component: About },
        ]
    },
    { path: 'auth', component: AuthComponent },
    { path: '**', redirectTo: '' },
]
