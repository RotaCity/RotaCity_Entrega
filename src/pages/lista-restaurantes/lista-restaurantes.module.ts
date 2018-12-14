import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaRestaurantesPage } from './lista-restaurantes';

@NgModule({
  declarations: [
    ListaRestaurantesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaRestaurantesPage),
  ],
})
export class ListaRestaurantesPageModule {}
