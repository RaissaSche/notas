import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderEnum } from '../../enums/order.enum';
import { NoteFieldsEnum } from '../../enums/noteFields.enum';
import { Ordination } from '../../models/ordination.model';
import { NoteServiceProvider } from '../../providers/note-service/note-service';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage implements OnInit{

  ordination = new Ordination();

  constructor(public navCtrl: NavController,
    private noteService: NoteServiceProvider) {}

  ngOnInit(): void {
    this.getOrdenation();
  }

  updateOrdernation() {
    this.noteService.updateOrdination(this.ordination);
  }

  getOrdenation() {
    this.ordination = this.noteService.getOrdination();
  }

}