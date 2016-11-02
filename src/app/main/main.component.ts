import { Component, OnInit } from '@angular/core'
import { AppBar } from '../shared/components/app-bar'

@Component({
    selector: 'main',
    template: require('./main.component.html')
})
export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
