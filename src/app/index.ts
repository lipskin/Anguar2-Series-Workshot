import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core'

import { App } from './app'
import { About } from './about';
import { AppBar } from './shared/components/app-bar';
import { AuthComponent } from './auth/auth.component';
import { Routers } from './routes'
import { HomeModule } from './home';

import * as services from './shared/services'

const mapValuesToArray = obj => Object.keys(obj).map(key => obj[key])

@NgModule({
  declarations: [ App, MainComponent, AuthComponent, About, AppBar ],
  imports: [ BrowserModule, HttpModule, FormsModule, Routers, HomeModule ],
  providers: mapValuesToArray(services),
  bootstrap: [ App ]
})

export class AppModule {}
