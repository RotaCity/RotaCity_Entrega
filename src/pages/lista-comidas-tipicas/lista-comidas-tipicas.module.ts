import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaComidasTipicasPage } from './lista-comidas-tipicas';

@NgModule({
  declarations: [
    ListaComidasTipicasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaComidasTipicasPage),
  ],
})
export class ListaComidasTipicasPageModule {}
