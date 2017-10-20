import { LoginPage } from './../login/login';
import { EditarAlunoPage } from './../editar-aluno/editar-aluno';
import { Aluno } from './../../app/models/aluno/aluno.interface';
import { AddAlunoPage } from './../add-aluno/add-aluno';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireDatabase} from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-lista-aluno',
  templateUrl: 'lista-aluno.html',
})
export class ListaAlunoPage {

  listaAlunoRef$: FirebaseListObservable<Aluno[]>

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private database: AngularFireDatabase, 
    private ActionSheetController: ActionSheetController) {
/* integração com o firebase.
*/
      this.listaAlunoRef$ = this.database.list('aluno');

      
  }

  selectAluno(aluno: Aluno) {

    this.ActionSheetController.create({
      title: `${aluno.NomeAluno}`,
      buttons: [
        {
          text: 'Editar',
          handler: () => {

            this.navCtrl.push(EditarAlunoPage, 
              {AlunoId: aluno.$key });

          }
        },
        {
          text: 'Apagar',
          role: 'destructive',
          handler: () => {

            this.listaAlunoRef$.remove(aluno.$key);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("O usuário cancelou o botão selecionado.")
          }
        }
      ]
    }).present();
    
  }

  navigateToAddAlunoPage () {
    // navegação do usuario para adicionar o aluno.
    this.navCtrl.push(AddAlunoPage);
  }
  logout(){
    this.navCtrl.push(LoginPage);

}
}
