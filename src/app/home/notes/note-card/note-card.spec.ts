import { isEmpty } from 'lodash';
import { NoteCard } from './index.ts'
import { TestComponentBuilder, ComponentFixture }from '@angular/compiler/testing';
import { inject } from '@angular/core/testing';
import { Component } from '@angular/core'
import { By } from '@angular/platform-browser'

@Component({
  directives: [ NoteCard ],
  template: '<note-card [note]="note" (checked)="onCheck($event)"></note-card>'
})
class TestComponent{
  newNote: {title: string, content: string, color: string};
  note = {
    title: "test title",
    content: "test content"
  }

  onCheck(note) {
    this.newNote = note;
  }
}

describe("NoteCard", ()=>{
  let fixture:ComponentFixture<TestComponent>;

  beforeEach(inject([TestComponentBuilder], (builder:TestComponentBuilder)=>{
    fixture = builder.createSync(TestComponent)
  }))

  it("the componet should have a title", ()=>{
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.title'));
    expect(el.nativeElement.textContent.trim()).toBe("test title");
  })

  it("the componet will change when click the check", ()=>{
    fixture.detectChanges();
    const testComponent:TestComponent = fixture.componentInstance;
    const el = fixture.debugElement.query(By.css('.icon'));
    el.triggerEventHandler('click', null);

    expect(testComponent.newNote.title).toBe("test title");
  })
})