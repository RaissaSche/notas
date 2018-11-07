//import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { NoteModel } from '../../models/note.model';

/*
  Generated class for the NotaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoteServiceProvider {

  notes = new Array<NoteModel>();
  date = new Date();
  //TODO: parametros de ordenação


  constructor(/*public http: HttpClient*/) {
    this.criarMock();
  }

  getNotes(): Array<NoteModel> {

    
    // /?orderBy=TITLE&order=DECREASING
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
    return 'abc';
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
