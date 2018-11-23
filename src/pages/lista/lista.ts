import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { NoteModel } from '../../models/note.model';
import { NotaPage } from '../nota/nota';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage implements OnInit {

  notes: Array<NoteModel>;

  constructor(public navCtrl: NavController, private noteService: NoteServiceProvider) {
  }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => this.notes = notes);
  }

  goToNota(noteId){
    const param = { noteId: noteId };
    this.navCtrl.push(NotaPage, param);
  }
}
