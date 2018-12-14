import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { CircutoEngenhoPage } from '../circuto-engenho/circuto-engenho';
import { CircutoIgrejasPage } from '../circuto-igrejas/circuto-igrejas';
import { CircutoPraiaPage } from '../circuto-praia/circuto-praia';
import { CircutoMistoPage } from '../circuto-misto/circuto-misto';
import { CircutoPontosHistoricosPage } from '../circuto-pontos-historicos/circuto-pontos-historicos';

@IonicPage()
@Component({
  selector: 'page-lista-circuitos',
  templateUrl: 'lista-circuitos.html',
})
export class ListaCircuitosPage {

  public title_circuito: string = "Engenhos";

  users: any[];
  cadastro: any = {};
  nomes: boolean = true;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public servicos: ServicosProvider,
    public modalCtrl: ModalController
  ) {

    this.buscarDados();

  }

 

  buscarDados() {
    //retornar dados do banco
    this.servicos.listarDados()
      .subscribe(
        data => this.users = data,
        err => console.log(err)
      );
  }

  goToPageCircuitoPraia() {
    this.navCtrl.push(CircutoPraiaPage);
  }

  goToPageCircuitoIgrejas() {
    this.navCtrl.push(CircutoIgrejasPage);
  }

  goToPageCircuitoEngenhos() {
    this.navCtrl.push(CircutoEngenhoPage);
  }

  goToPageCircuitoMisto() {
    this.navCtrl.push(CircutoMistoPage);
  }

  goToPageCircuitoPonto() {
    this.navCtrl.push(CircutoPontosHistoricosPage);
  }

}
