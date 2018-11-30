import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { NoteModel } from '../../models/note.model';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html'
})
export class NotaPage implements OnInit {

  note: NoteModel;
  title: string;
  text: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private noteService: NoteServiceProvider) { }

  ngOnInit() {

    const id = this.navParams.get('noteId');
    console.log(id);
    
    if (!!id) {
      this.noteService.getNote(id).subscribe(note => {
        this.note = note
        this.title = note.title;
        this.text = note.text;
      });
    } else {
      this.noteService.getLastNote().subscribe(note => {
        this.note = note
        this.title = note.title;
        this.text = note.text;
      });
    }
    console.log(this.note);
  }

  onSubmit(value) {
    console.log(value)
  }

  createNote() {
    this.note = { title: this.title, text: this.text };
    this.noteService.createNote(this.note);
  }

  updateNote() {
    this.noteService.updateNote(this.note, this.note.id);
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id);
  }

  getNote() {
    this.noteService.getNote(this.note.id);
  }
}
