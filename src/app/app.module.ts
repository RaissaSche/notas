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
import { NoteServiceProvider } from '../providers/note-service/note-service';
import { HttpClientModule } from '@angular/common/http';

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
    IonicModule.forRoot(MyApp),
    HttpClientModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteServiceProvider,
  ]
})
export class AppModule {}