import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../tarefa.model';


@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {

  @Input() tarefas: Observable<Tarefa>;
  
  @Output() onEditar: EventEmitter<Tarefa> = new EventEmitter();
  @Output() onVisualizar: EventEmitter<Tarefa> = new EventEmitter();
  @Output() onExcluir: EventEmitter<Tarefa> = new EventEmitter();

  onClickEditar(tarefa: Tarefa) {
    this.onEditar.emit(tarefa);
  }

  onClickVisualizar(tarefa: Tarefa) {
    this.onVisualizar.emit(tarefa);
  }

  onClickExcluir(tarefa: Tarefa) {
    this.onExcluir.emit(tarefa);
  }
}
