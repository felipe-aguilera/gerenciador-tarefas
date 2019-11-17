import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { GerenciadorTarefasComponent } from './gerenciador-tarefas/gerenciador-tarefas.component';
import { TarefaService } from './tarefa.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [ListaTarefasComponent, GerenciadorTarefasComponent],
  providers: [TarefaService],
})
export class TarefasModule { }
