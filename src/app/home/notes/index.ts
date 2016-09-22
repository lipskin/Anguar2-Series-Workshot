import {Component} from "@angular/core";
import {NoteCard} from "./note-card"
import { NoteCreator } from './note-creator'
import {NoteService} from "../../shared/services/notes";

@Component({
  selector: 'notes',
  template: require('./notes.html'),
  styles: [require('./notes.css')],
  directives: [NoteCard, NoteCreator]
})
export class Notes {
  notes = []

  constructor(private noteService: NoteService) {
    this.noteService.getNotes()
      .subscribe(res => this.notes = res.data)
  }

  checkCard(note, i) {
    this.noteService.completeNote(note)
      .subscribe(note => {

        let index = this.notes.findIndex(localNote => localNote.id === note.id)

        this.notes.splice(index, 1)

      })
  }

  addNote(note) {
    this.noteService.createNote(note)
      .subscribe(note => {
        this.notes.push(note);
      })
  }
}