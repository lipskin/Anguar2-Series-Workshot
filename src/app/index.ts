import { BrowserModule } from '@angular/platform-browser';

import { App } from './app'
// export {router} from './routes'

// import * as services from './shared/services'

const mapValuesToArray = obj => Object.keys(obj).map(key => obj[key])

import { NgModule } from '@angular/core'

@NgModule({
  declarations: [ App ],
  imports: [ BrowserModule ],
  // providers: mapValuesToArray(services),
  bootstrap: [ App ]
})
export class AppModule {}