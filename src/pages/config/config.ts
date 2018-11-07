import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {

  orderBy = Array;

  constructor(public navCtrl: NavController) {

    enum OrderBy {
      TITLE,
      DATE
    }
    enum Time {
      ASCENDING = -1,
      DECREASING = 1
    }
  }

  getOrderBy() {
    return this.orderBy;
  }

  setOrderBy(tituloOuData, AscOuDesc) {
    this.orderBy = [tituloOuData, AscOuDesc];
  }

}