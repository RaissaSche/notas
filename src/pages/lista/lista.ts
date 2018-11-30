import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { NoteModel } from '../../models/note.model';
import { NotaPage } from '../nota/nota';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage implements OnInit {

  notes: Observable<any[]>;


  constructor(public navCtrl: NavController, private noteService: NoteServiceProvider) {
  }

  ngOnInit() {
    // this.noteService.getNotes().(notes => {
    //   this.notes = notes
    //   console.log('notes', notes)
    // });
    this.notes = this.noteService.getNotes();
  }

  goToNota(noteId){
    const param = { noteId: noteId };
    this.navCtrl.push(NotaPage, param);
  }
}
