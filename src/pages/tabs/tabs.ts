import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ListaNewsPage } from '../lista-news/lista-news';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListaNewsPage;
  tab3Root = ContactPage;
  tab4Root = AboutPage;

  constructor(public alertCtrl: AlertController) {

  }


  
}
