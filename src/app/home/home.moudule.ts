import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { Home } from './home.component.ts'
import { NoteCard, NoteCreator, ColorPicker, Notes } from './notes'


@NgModule({
  declarations: [ Home, Notes, NoteCard, NoteCreator, ColorPicker ],
  imports: [ BrowserModule, FormsModule ],
  exports: [ Home ]
})
export class HomeModule {}
