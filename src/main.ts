// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
// import { disableDeprecatedForms, provideForms } from '@angular/forms'

// import {App, providers} from './app'
// import {HTTP_PROVIDERS} from '@angular/http'
// import {provideRouter} from '@angular/router'
// import {router} from './app/routes'

// bootstrap(App, [
//   ...HTTP_PROVIDERS,
//   disableDeprecatedForms(),
//   provideForms(),
//   provideRouter(router),
//   ...providers
// ])

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app';

platformBrowserDynamic().bootstrapModule(AppModule);