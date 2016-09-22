import {RouterConfig} from '@angular/router'
import {Home} from './home/index'

export const router: RouterConfig = [
  {path: '', component: Home},
  {path: '**', redirectTo: ''}
]