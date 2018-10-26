import { Component } from "@angular/core";
import { NavController } from "ionic-angular/umd";
import { ListaPage } from "../lista/lista";
import { ConfigPage } from "../config/config";
import { NotaPage } from "../nota/nota";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html'
})
export class TabsComponent {

  constructor(public navCtrl: NavController) {}

  goToNota(params){
    if (!params) params = {};
    this.navCtrl.push(NotaPage);
  }

  goToLista(params){
    if (!params) params = {};
    this.navCtrl.push(ListaPage);
  }
  
  goToConfig(params){
    if (!params) params = {};
    this.navCtrl.push(ConfigPage);
  }
}