import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { NoteModel } from '../../models/note.model';

@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html'
})
export class NotaPage implements OnInit {

  note = new NoteModel('', '');
  key: string;
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private noteService: NoteServiceProvider) { }

  ngOnInit() {

    this.key = this.navParams.get('noteId');

    let noteSubscription;
    
    if (!!this.key) {
      noteSubscription = this.noteService.getNote(this.key).subscribe(note => {
        if(note) this.note = note 
        noteSubscription.unsubscribe();
      });
    } else {
      noteSubscription = this.noteService.getLastNote().subscribe(note => {
        if (note) this.note = note
        noteSubscription.unsubscribe();
      });
    }
  }

  onSubmit(value) {
    console.log(value)
  }

  createNote() {
    this.note = this.noteService.createNote(this.note);
    this.key = this.note.key;
  }

  updateNote() {
    this.noteService.updateNote(this.note, this.note.key);
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.key);
  }

  getNote() {
    this.noteService.getNote(this.note.key);
  }
}
