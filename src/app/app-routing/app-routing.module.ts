import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { GerenciadorTarefasComponent } from '../tarefas/gerenciador-tarefas/gerenciador-tarefas.component';
import { GerenciadorUsuariosComponent } from '../usuarios/gerenciador-usuarios/gerenciador-usuarios.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'tarefas', component: GerenciadorTarefasComponent },
  { path: 'usuarios', component: GerenciadorUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
