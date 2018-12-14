import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaLocaisPage } from './lista-locais';

@NgModule({
  declarations: [
    ListaLocaisPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaLocaisPage),
  ],
})
export class ListaLocaisPageModule {}
