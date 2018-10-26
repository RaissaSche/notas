import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaPage } from '../lista/lista';
import { ConfiguraEsPage } from '../configura-es/configura-es';

@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html'
})
export class NotaPage {

  constructor(public navCtrl: NavController) {
  }
  goToLista(params){
    if (!params) params = {};
    this.navCtrl.push(ListaPage);
  }goToConfiguraEs(params){
    if (!params) params = {};
    this.navCtrl.push(ConfiguraEsPage);
  }
}
