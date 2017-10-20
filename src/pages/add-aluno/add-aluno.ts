import { Aluno } from './../../app/models/aluno/aluno.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from "angularfire2/database-deprecated"; 
import { AngularFireDatabase} from 'angularfire2/database-deprecated';
@Component({
  selector: 'page-add-aluno',
  templateUrl: 'add-aluno.html',
})
export class AddAlunoPage {
//criando um novo objeto.
  aluno = {} as Aluno

 alunoRef$: FirebaseListObservable<Aluno[]>
  constructor(public navCtrl: NavController, public navParams: 
    NavParams, private database: AngularFireDatabase) {
      this.alunoRef$ = this.database.list('aluno');

      /*
      aluno:
        0:
        NomeAluno: 'Caio Mateus',
        MatriculaAluno: 20142148060022,
        Nota1: 100,
        Nota2: 90,
        QuantidadeFalta: 2
      */
  }

 addAluno(aluno: Aluno){
/*
criando um novo objeto e enviando para o firebase.
*/
  this.alunoRef$.push({
    NomeAluno: this.aluno.NomeAluno,
    MatriculaAluno: Number(this.aluno.MatriculaAluno),
    Nota1: Number(this.aluno.Nota1),
    Nota2: Number(this.aluno.Nota2),
    QuantidadeFalta: Number(this.aluno.QuantidadeFalta)
  });

  //resetar os alunos
  this.aluno = {} as Aluno;
   
  //Navegar o usuário até a lista de alunos.
  this.navCtrl.pop();
 }

}
