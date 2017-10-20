import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAlunoPage } from './add-aluno';

@NgModule({
  declarations: [
    AddAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAlunoPage),
  ],
})
export class AddAlunoPageModule {}
