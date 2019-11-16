import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { GerenciadorTarefasComponent } from '../tarefas/gerenciador-tarefas/gerenciador-tarefas.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'tarefas', component: GerenciadorTarefasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
