//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoteModel } from '../../models/note.model';
import { OrderEnum } from '../../enums/order.enum';
import { NoteFieldsEnum } from '../../enums/noteFields.enum';
import { Ordination } from '../../models/ordination.model';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { Observable } from '../../../node_modules/rxjs';
import { Observable } from 'rxjs-compat';
import { Note } from '../../../node_modules/ionic-angular/umd';

/*
  Generated class for the NotaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoteServiceProvider {

  notes = new Array<NoteModel>();
  date = new Date();
  afList = this.afDatabase.list<NoteModel>('notes');
  
  ordination: Ordination;

  batata;

  constructor(public afDatabase: AngularFireDatabase) {

    let noteTest;
    
    
    
    // this.afList = afDatabase.list<NoteModel>('/notes').valueChanges();
    
    // this.batata = this.afDatabase.list<NoteModel>('/notes', ref => 
    //   ref.limitToFirst(3)
    // );
    
    // let batata2 = this.batata.valueChanges().source;
    
    // console.log(batata2);
    
    // batata2.subscribe()
    
    // this.batata.subscribe( bat => console.log(bat));
    
    /*this.afList.subscribe( d => {
      noteTest.splice(0, noteTest.length);
      for (let index = 0; index < d.length; index++) {
        const element = d[index];
        console.log(element);
        noteTest.push(this.afList[index]); 
      }
      console.log(noteTest);
    })*/
    
    this.ordination = this.getOrdination();
    
    this.criarMock();
   // this.afList.push(this.notes[0]);
    this.afList.valueChanges().subscribe(lst => {
      console.log(lst);
    });
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
    this.afDatabase.list<NoteModel>('notes').remove(id);
  }

  updateNote(note: NoteModel, id: string) {
    this.afDatabase.list<NoteModel>('notes').update(id, note);
  }

  createNote(note: NoteModel): NoteModel {
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
