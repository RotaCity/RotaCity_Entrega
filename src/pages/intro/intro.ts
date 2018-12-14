import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
   
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  goToTabsPage() {
    this.navCtrl.push(TabsPage);
  }

}
