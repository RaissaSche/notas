import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { NotaPage } from "../../pages/nota/nota";
import { ListaPage } from "../../pages/lista/lista";
import { ConfigPage } from "../../pages/config/config";

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