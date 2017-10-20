import { LoginPage } from './../pages/login/login';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';


import {AddAlunoPage} from './../pages/add-aluno/add-aluno';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import {EditarAlunoPage} from './../pages/editar-aluno/editar-aluno';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FIREBASE_CREDENTIALS} from './firebase.credentials';
@NgModule({
  declarations: [
    MyApp,
   
    AddAlunoPage,
    EditarAlunoPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // Importa o AngularFireDatabaseModule para usar as interações do banco de dados.
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   
    AddAlunoPage,
    EditarAlunoPage,
    LoginPage

  ],
  providers: [
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
