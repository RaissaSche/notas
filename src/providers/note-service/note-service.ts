//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoteModel } from '../../models/note.model';
import { OrderEnum } from '../../enums/order.enum';
import { NoteFieldsEnum } from '../../enums/noteFields.enum';
import { Ordination } from '../../models/ordination.model';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from '../../../node_modules/rxjs';

/*
  Generated class for the NotaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoteServiceProvider {

  notes = new Array<NoteModel>();
  date = new Date();
  afList = new  Observable<NoteModel[]>();
  
  ordination: Ordination;

  constructor(public afDatabase: AngularFireDatabase) {
    this.afList = afDatabase.list<NoteModel>('/notes').valueChanges();
    this.afList.subscribe( d => {
      this.notes.splice(0, this.notes.length);
      for (let index = 0; index < d.length; index++) {
        const element = d[index];
        console.log(element);
        this.notes.push(this.afList[index]); 
      }
    })

 this.ordination = this.getOrdination();
  }

  getNotes(): Array<NoteModel> {
    return this.notes;
  }

  getLastNote(): NoteModel {
    return this.notes[length];
  }

  getNote(id: string): NoteModel {
    return this.notes[id];
  }

  deleteNote(id: string): void {
    this.afDatabase.list<NoteModel>('/notes').remove(id);
  }

  updateNote(note: NoteModel, id: string) {
    this.afDatabase.list<NoteModel>('/notes').update(id, note);
  }

  createNote(note: NoteModel) {

    this.afDatabase.list<NoteModel>('/notes').push(note);
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
}
