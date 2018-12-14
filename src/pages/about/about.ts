import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.showAlert();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Opa!',
      subTitle: 'Desculpa ainda estamos em desenvolvimento',
      buttons: ['OK']
    });
    alert.present();
  }

}
