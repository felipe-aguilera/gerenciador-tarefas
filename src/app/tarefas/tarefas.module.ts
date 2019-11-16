import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { GerenciadorTarefasComponent } from './gerenciador-tarefas/gerenciador-tarefas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaTarefasComponent, GerenciadorTarefasComponent]
})
export class TarefasModule { }
