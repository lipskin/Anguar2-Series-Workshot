import {RouterConfig} from '@angular/router'
import {Home} from './home'
import {About} from './about'

export const router: RouterConfig = [
  {path: '', component: Home},
  {path: 'about', component: About},
  {path: '**', redirectTo: ''}
]