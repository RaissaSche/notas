import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Note } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { NoteModel } from '../../models/note.model';

@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html'
})
export class NotaPage implements OnInit {

  note: NoteModel;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private noteService: NoteServiceProvider) {}
  
  ngOnInit() {
    const id = this.navParams.get('noteId'); 
    console.log(id);
    this.note = !!id ? this.noteService.getNote(id) : this.noteService.getLastNote();
  }

  createNote() {
    this.note = new NoteModel();
    this.note.id = this.noteService.createNote(this.note);
  }

  updateNote() {
    this.noteService.updateNote(this.note);
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id);
  }

}
