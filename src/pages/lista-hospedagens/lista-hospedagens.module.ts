import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaHospedagensPage } from './lista-hospedagens';

@NgModule({
  declarations: [
    ListaHospedagensPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaHospedagensPage),
  ],
})
export class ListaHospedagensPageModule {}
