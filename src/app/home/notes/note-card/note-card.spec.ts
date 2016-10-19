import { isEmpty } from 'lodash';
import { NoteCard } from './index.ts'
import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core'
import { ComponentFixture } from '@angular/core/testing/component_fixture'
import { By, BrowserModule } from '@angular/platform-browser'

@Component({
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
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [ TestComponent, NoteCard ],
      imports: [ BrowserModule ]
    })

    fixture = TestBed.createComponent(TestComponent);
  })

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