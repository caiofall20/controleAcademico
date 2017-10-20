import { Aluno } from './../../app/models/aluno/aluno.interface';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'page-editar-aluno',
  templateUrl: 'editar-aluno.html',
})
export class EditarAlunoPage {
  AlunoSubscription: Subscription;
  listaAlunoRef$: FirebaseObjectObservable<Aluno>;
  aluno = {} as Aluno;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
  private database: AngularFireDatabase) {

    const AlunoId = this.navParams.get('AlunoId');

    console.log(AlunoId);

    this.listaAlunoRef$ = this.database.object(`aluno/${AlunoId}`);

    this.AlunoSubscription =
    this.listaAlunoRef$.subscribe(
      Aluno => this.aluno = Aluno);
  }
editAluno(Aluno: Aluno){
  this.listaAlunoRef$.update(Aluno);

  this.navCtrl.pop();
}
  ionViewWillLeave() {
    this.AlunoSubscription.unsubscribe();
  }
  }


