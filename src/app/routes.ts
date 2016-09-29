import {RouterConfig} from '@angular/router'
import {Home} from './home'
import {About} from './about'
import { AuthComponent } from './auth'

export const router: RouterConfig = [
  {path: '', component: Home},
  {path: 'about', component: About},
  {path: 'auth', component: AuthComponent},
  {path: '**', redirectTo: ''}
]