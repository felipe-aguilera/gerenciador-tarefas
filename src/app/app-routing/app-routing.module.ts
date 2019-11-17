import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenciadorTarefasComponent } from '../tarefas/gerenciador-tarefas/gerenciador-tarefas.component';
import { GerenciadorUsuariosComponent } from '../usuarios/gerenciador-usuarios/gerenciador-usuarios.component';
import { LoginComponent } from '../login/login.component';
import { OnlyNotLogged } from '../only-not-logged.guard';
import { AuthGuard } from '../auth.guard';
import { OnlyAdminGuard } from '../only-admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent, canActivate: [OnlyNotLogged] },
  { path: 'tarefas', component: GerenciadorTarefasComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: GerenciadorUsuariosComponent, canActivate: [AuthGuard, OnlyAdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
