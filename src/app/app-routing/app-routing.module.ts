import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { GerenciadorTarefasComponent } from '../tarefas/gerenciador-tarefas/gerenciador-tarefas.component';
import { GerenciadorUsuariosComponent } from '../usuarios/gerenciador-usuarios/gerenciador-usuarios.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  // { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tarefas', component: GerenciadorTarefasComponent },
  { path: 'usuarios', component: GerenciadorUsuariosComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
