import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPraiasPage } from './lista-praias';

@NgModule({
  declarations: [
    ListaPraiasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPraiasPage),
  ],
})
export class ListaPraiasPageModule {}
