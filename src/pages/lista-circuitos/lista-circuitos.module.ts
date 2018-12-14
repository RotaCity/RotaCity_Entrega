import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCircuitosPage } from './lista-circuitos';

@NgModule({
  declarations: [
    ListaCircuitosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaCircuitosPage),
  ],
})
export class ListaCircuitosPageModule {}
