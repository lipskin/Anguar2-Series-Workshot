import {Component} from "@angular/core"
import {Notes} from "./notes"
@Component({
  selector: 'home',
  template: require('./home.html'),
  directives: [Notes]
})
export class Home{}