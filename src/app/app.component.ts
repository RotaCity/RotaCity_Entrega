import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';
import { TabsPage } from '../pages/tabs/tabs';
import { SlideIntroProvider } from '../providers/slide-intro/slide-intro';


@Component({
  templateUrl: 'app.html',
  providers: [
    SlideIntroProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    SlideIntroProvider: SlideIntroProvider
    ) {
    platform.ready().then(() => {
      
      let slide = SlideIntroProvider.getSlideData();
      if(slide == null) {
        this.rootPage = IntroPage
        SlideIntroProvider.setSlideData(false);
      }
      else {
        this.rootPage = TabsPage;
      }
      console.log(slide);

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
