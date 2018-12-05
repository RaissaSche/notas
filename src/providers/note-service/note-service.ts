//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoteModel } from '../../models/note.model';
import { NoteFieldsEnum } from '../../enums/noteFields.enum';
import { Ordination } from '../../models/ordination.model';

import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable, Subject } from '../../../node_modules/rxjs';
import { Observable, Subject, Subscriber } from 'rxjs-compat';
import { Subscribable } from 'rxjs';
import { storage } from 'firebase';

/*
  Generated class for the NotaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoteServiceProvider {

  tableName = 'notes'
  ordination: Ordination;

  lastNote = new Subject<NoteModel>();
  notes = new Observable<NoteModel[]>();

  itemsRef;
  afList;
  
  constructor(private afDatabase: AngularFireDatabase) {
    
    // delete all
    // this.afDatabase.list<NoteModel>(this.tableName).remove();

    this.initializing();
  }

  initializing() {
    this.ordination = this.getOrdination();

    this.itemsRef = this.afDatabase.list<NoteModel>(this.tableName, ref => 
      ref.orderByChild(this.ordination.priority));

    this.notes = this.itemsRef.snapshotChanges()
      .pipe( changes => 
        changes.map(c1 => 
          c1.map(c2 => {
            let note = { ...c2.payload.val() };
            note.key = c2.payload.key;
            return note;
          })
        )
      );
    
      this.notes.subscribe(res => this.lastNote.next( res[0] ));
  }
  
  getNotes(): Observable<NoteModel[]> {
    let notes = new Subject<NoteModel[]>(); 
    this.notes.subscribe(res => notes.next( this.ordination.ascending ? res : res.reverse() ));
    return notes;
  }
  
  getLastNote(): Observable<NoteModel> {
    return this.lastNote;
  }

  getNote(key: string): Observable<NoteModel> {
    let note = new Subject<NoteModel>();
    this.notes.subscribe(res => note.next( res.find(n => n.key === key) ));
    return note;
  }

  deleteNote(key: string): void {
    this.itemsRef.remove(key);
  }

  updateNote(note: NoteModel, key: string) {
    this.itemsRef.update(key, note);
  }

  createNote(note: NoteModel): NoteModel {
    let res = this.itemsRef.push(note);
    note.key = res.key;
    return note;
  }

  updateOrdination(ordination: Ordination): void {
    this.ordination = ordination;
    localStorage.setItem( 'ordination', JSON.stringify(ordination) );
    this.initializing();
  }

  getOrdination(): Ordination {
    let ordination = JSON.parse( localStorage.getItem('ordination') );
    if (!ordination)
      ordination = {
        ascending: false,
        priority: NoteFieldsEnum.DATE
      }
    return ordination;
  }

}
