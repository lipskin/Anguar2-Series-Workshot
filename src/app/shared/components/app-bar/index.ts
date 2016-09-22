import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from '@angular/router'


@Component({
  selector: 'app-bar',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: require('./app-bar.html'),
  styles: [require('./app-bar.css')]
})
export class AppBar{}