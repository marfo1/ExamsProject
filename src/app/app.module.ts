import { VideoPage } from './../pages/video/video';
import { ImproperNounPage } from './../pages/improper-noun/improper-noun';
import { CommonNounPage } from './../pages/common-noun/common-noun';
import { TypeNounPage } from './../pages/type-noun/type-noun';
import { DNounPage } from './../pages/d-noun/d-noun';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TypesPage } from '../pages/types/types';
import { CountableNounPage } from '../pages/countable-noun/countable-noun';
import { UncountableNounPage } from '../pages/uncountable-noun/uncountable-noun';

//import { TutorialPage } from './../pages/tutorial/tutorial';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //TutorialPage
    DNounPage,
    TypesPage,
    TypeNounPage,
    CommonNounPage,
    ImproperNounPage,
    CountableNounPage,
    UncountableNounPage,
    VideoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DNounPage,
    TypesPage,
    TypeNounPage,
    CommonNounPage,
    ImproperNounPage,
    CountableNounPage,
    UncountableNounPage,
    VideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
