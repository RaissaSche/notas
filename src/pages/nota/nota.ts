import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaPage } from '../lista/lista';

@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html'
})
export class NotaPage {

  constructor(public navCtrl: NavController) {
  }

}
