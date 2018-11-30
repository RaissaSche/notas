//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoteModel } from '../../models/note.model';
import { OrderEnum } from '../../enums/order.enum';
import { NoteFieldsEnum } from '../../enums/noteFields.enum';
import { Ordination } from '../../models/ordination.model';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { Observable, Subject } from '../../../node_modules/rxjs';
import { Observable, Subject } from 'rxjs-compat';
import { Note } from '../../../node_modules/ionic-angular/umd';

/*
  Generated class for the NotaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoteServiceProvider {

  notes = new Subject<NoteModel[]>();
  lastNote = new Subject<NoteModel>();
  note = new Subject<NoteModel>();

  afList = this.afDatabase.list<NoteModel>('notes');
  
  ordination: Ordination;

  constructor(public afDatabase: AngularFireDatabase) {

    
    this.ordination = this.getOrdination();
    
    this.afList.valueChanges().subscribe(notes => {
      console.log('VALUE CHANGES')
      this.notes.next(notes);
      this.lastNote.next(notes[notes.length-1]);
      console.log('lastnote', this.lastNote)
    });
  }
  
  getNotes(): Observable<NoteModel[]> {
    return this.afList.valueChanges();
  }
  
  getLastNote(): Observable<NoteModel> {
    return this.lastNote;
  }

  getNote(id: string): Observable<NoteModel> {
    return this.lastNote;
  }

  deleteNote(id: string): void {
    this.afDatabase.list<NoteModel>('notes').remove(id);
  }

  updateNote(note: NoteModel, id: string) {
    this.afDatabase.list<NoteModel>('notes').update(id, note);
  }

  createNote(note: NoteModel): NoteModel {
    note.id = this.generateId()
    let algumaCoisa = this.afDatabase.list<NoteModel>('notes').push(note);
    console.log(algumaCoisa);
    return this.notes[0];
  }

  updateOrdination(ordination: Ordination): void {
    this.ordination = ordination;
  }

  getOrdination(): Ordination {
    return {
      order: OrderEnum.DESCENDING,
      priority: NoteFieldsEnum.DATE
    }
  }

  generateId = () => `${Date.now()}${Math.floor(Math.random() * Math.floor(1000))}`

}
