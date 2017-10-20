import { ListaAlunoPage } from './../lista-aluno/lista-aluno';
import { AddAlunoPage } from './../add-aluno/add-aluno';

import { AngularFireAuth } from 'angularfire2/auth';
import { Professor } from './../../app/models/professor/professor';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  professor = {} as Professor;

  constructor(private AfAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

async login(professor: Professor){
  try{
  const result = this.AfAuth.auth.signInWithEmailAndPassword(professor.email, professor.password);
  if (result){
 this.navCtrl.push('ListaAlunoPage');
  }
  }
  catch(e) {
    console.error(e);
  }
}
register() {
  this.navCtrl.push('RegisterPage');
}
}
