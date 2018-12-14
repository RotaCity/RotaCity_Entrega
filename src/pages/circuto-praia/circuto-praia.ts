import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CircuitoProvider } from '../../providers/circuito/circuito';
import { ServicosProvider } from '../../providers/servicos/servicos';

@IonicPage()
@Component({
  selector: 'page-circuto-praia',
  templateUrl: 'circuto-praia.html',
})
export class CircutoPraiaPage {

  users: any[];
  cadastro: any = {};
  nomes: boolean = true;

  circuito: any = {};
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public servicos: ServicosProvider,

    ) {

    }
  


}
