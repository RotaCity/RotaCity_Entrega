import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaNewsPage } from './lista-news';

@NgModule({
  declarations: [
    ListaNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaNewsPage),
  ],
})
export class ListaNewsPageModule {}
