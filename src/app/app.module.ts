import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListaCircuitosPageModule } from '../pages/lista-circuitos/lista-circuitos.module';
import { ListaNewsPageModule } from '../pages/lista-news/lista-news.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { SlideIntroProvider } from '../providers/slide-intro/slide-intro';
import { ServicosProvider } from '../providers/servicos/servicos';
import { HttpModule } from '@angular/http';
import { ListaPraiasPageModule } from '../pages/lista-praias/lista-praias.module';
import { ListaHospedagensPageModule } from '../pages/lista-hospedagens/lista-hospedagens.module';
import { ListaRestaurantesPageModule } from '../pages/lista-restaurantes/lista-restaurantes.module';
import { ListaComidasTipicasPageModule } from '../pages/lista-comidas-tipicas/lista-comidas-tipicas.module';
import { ListaLocaisPageModule } from '../pages/lista-locais/lista-locais.module';
import { CircutoPraiaPageModule } from '../pages/circuto-praia/circuto-praia.module';
import { CircuitoProvider } from '../providers/circuito/circuito';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ListaCircuitosPageModule,
    ListaNewsPageModule,
    IntroPageModule,
    ListaPraiasPageModule,
    ListaHospedagensPageModule,
    ListaRestaurantesPageModule,
    ListaComidasTipicasPageModule,
    ListaLocaisPageModule,
    CircutoPraiaPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SlideIntroProvider,
    ServicosProvider,
    CircuitoProvider
  ]
})
export class AppModule {}
