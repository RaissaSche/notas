import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ordination } from '../../models/ordination.model';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { NoteFieldsEnum } from '../../enums/noteFields.enum';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage implements OnInit{

  ordination = new Ordination();
  noteFieldsEnum = NoteFieldsEnum;

  constructor(public navCtrl: NavController,
    private noteService: NoteServiceProvider) {}

  ngOnInit(): void {
    this.getOrdenation();
  }

  updateOrdination(value) {
    this.noteService.updateOrdination(this.ordination);
  }

  getOrdenation() {
    this.ordination = this.noteService.getOrdination();
  }

}