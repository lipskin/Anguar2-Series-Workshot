import { Component, Output, EventEmitter } from '@angular/core'
import { isEmpty } from 'lodash'

@Component({
  selector: 'note-creator',
  template: require('./note-creator.html'),
  styles: [ require('./note-creator.css') ]
})
export class NoteCreator {
  newNote = { title: '', value: ''};
  @Output()
  onCreateNote = new EventEmitter();

  createNote() {
    const { title, value } = this.newNote;
    if(isEmpty(title) || isEmpty(value)) {
      return false;
    }

    this.onCreateNote.emit({ title, value });

    this.newNote = { title: '', value: ''};
    return false;
  }
}
