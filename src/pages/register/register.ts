import { Professor } from './../../app/models/professor/professor';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth'


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  professor = {} as Professor;

  constructor(private Afauth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
async register(professor: Professor){
  try{
const result = await this.Afauth.auth.createUserWithEmailAndPassword(professor.email,
   professor.password)
   console.log(result);
}
catch(e){
  console.error(e);
}

}
}

