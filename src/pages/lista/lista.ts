import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { NoteModel } from '../../models/note.model';
import { NotaPage } from '../nota/nota';
import { Observable, Subject } from '../../../node_modules/rxjs';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage implements OnInit {

  notes: Observable<NoteModel[]>

  constructor(
    private navCtrl: NavController, 
    public noteService: NoteServiceProvider) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

  goToNota(noteId){
    const param = { noteId: noteId };
    this.navCtrl.push(NotaPage, param);
  }
}
