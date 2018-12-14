import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

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
