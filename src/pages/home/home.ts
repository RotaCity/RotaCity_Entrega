import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaCircuitosPage } from '../lista-circuitos/lista-circuitos';
import { ListaPraiasPage } from '../lista-praias/lista-praias';
import { ListaHospedagensPage } from '../lista-hospedagens/lista-hospedagens';
import { ListaRestaurantesPage } from '../lista-restaurantes/lista-restaurantes';
import { ListaComidasTipicasPage } from '../lista-comidas-tipicas/lista-comidas-tipicas';
import { ListaLocaisPage } from '../lista-locais/lista-locais';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPageCircuitos() {
    this.navCtrl.push(ListaCircuitosPage);
  }

  goToPagePraias() {
    this.navCtrl.push(ListaPraiasPage);
  }

  goToPageHospedagens() {
    this.navCtrl.push(ListaHospedagensPage);
  }

  goToPageRestaurantes() {
    this.navCtrl.push(ListaRestaurantesPage);
  }

  goToPageComidasTipicas() {
    this.navCtrl.push(ListaComidasTipicasPage);
  }

  goToPageLocais() {
    this.navCtrl.push(ListaLocaisPage);
  }

}
