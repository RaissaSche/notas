import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotaPage } from '../pages/nota/nota';
import { ListaPage } from '../pages/lista/lista';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigPage } from '../pages/config/config';
import { TabsComponent } from '../components/tabs/tabs.component';

@NgModule({
  declarations: [
    MyApp,
    NotaPage,
    ListaPage,
    ConfigPage,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotaPage,
    ListaPage,
    ConfigPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}