import {Component} from "@angular/core";
import {NoteCard} from "./note-card"
import { NoteCreator } from './note-creator'

@Component({
  selector: 'notes',
  template: require('./notes.html'),
  styles: [require('./notes.css')],
  directives: [NoteCard, NoteCreator]
})
export class Notes {
  notes = [
    {
      title: 'n',
      value: 'v'
    }, {
      title: 'n1',
      value: 'v1'
    }
  ]

  checkCard(note, i) {
    this.notes.splice(i, 1)
  }

  addNote(note) {
    this.notes.push(note);
  }
}