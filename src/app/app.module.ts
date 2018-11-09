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
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBNjI5TuLu3RceMDincwoTkN7pAFolvD44",
  authDomain: "notas-982fa.firebaseapp.com",
  databaseURL: "https://notas-982fa.firebaseio.com",
  projectId: "notas-982fa",
  storageBucket: "notas-982fa.appspot.com",
  messagingSenderId: "835493474819"
};

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
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NoteServiceProvider,
    AngularFireDatabase,
  ]
})
export class AppModule { }