//import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { NoteModel } from '../../models/note.model';
import { OrderEnum } from '../../enums/order.enum';
import { NoteFieldsEnum } from '../../enums/noteFields.enum';
import { Ordination } from '../../models/ordination.model';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
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

  constructor(/*public http: HttpClient*/
  public afDatabase: AngularFireDatabase) {
    this.afList = afDatabase.list<NoteModel>('/notes').valueChanges();
    this.afList.subscribe( d => {
      for (let index = 0; index < d.length; index++) {
        const element = d[index];
        console.log(element);
        //TODO: Check if this is the right way to do it
        this.afList[index] = this.notes[index]; 
      }
    })
    this.criarMock();
    this.ordination = this.getOrdination();
  }

  getNotes(): Array<NoteModel> {
    return this.notes;
  }

  getLastNote(): NoteModel {
    return this.notes[0];
  }

  getNote(id: string): NoteModel {
    return this.notes[1];
  }

  deleteNote(id: string): void {

  }

  updateNote(note: NoteModel) {

  }

  createNote(note: NoteModel): string {
    note = this.afList.push({});
    return 'abc';
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

  criarMock() {
    this.notes.push({
      id: '1',
      title: 'nota1',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero laboriosam voluptatem ullam tempora minus, perferendis ducimus consequuntur! Quia rem obcaecati tempore laudantium. Quidem id rem cumque facilis omnis possimus ducimus.',
      date: this.date
    });

    this.date.setDate(this.date.getDate() + 1)

    this.notes.push({
      id: '2',
      title: 'nota2',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero laboriosam voluptatem ullam tempora minus, perferendis ducimus consequuntur! Quia rem obcaecati tempore laudantium. Quidem id rem cumque facilis omnis possimus ducimus.',
      date: this.date
    });

    this.date.setDate(this.date.getDate() + 1)

    this.notes.push({
      id: '3',
      title: 'nota da Raissa',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero laboriosam voluptatem ullam tempora minus, perferendis ducimus consequuntur! Quia rem obcaecati tempore laudantium. Quidem id rem cumque facilis omnis possimus ducimus.',
      date: this.date
    });

    this.date.setDate(this.date.getDate() + 1)

    this.notes.push({
      id: '4',
      title: 'nota da Julia',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero laboriosam voluptatem ullam tempora minus, perferendis ducimus consequuntur! Quia rem obcaecati tempore laudantium. Quidem id rem cumque facilis omnis possimus ducimus.',
      date: new Date()
    });
  }

}
