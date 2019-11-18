import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../tarefa.model';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {
  @Input() tarefas: Observable<Tarefa>;
  
  @Output() onEditar: EventEmitter<any> = new EventEmitter();
  @Output() onVisualizar: EventEmitter<Tarefa> = new EventEmitter();
  @Output() onExcluir: EventEmitter<Tarefa> = new EventEmitter();
  @Output() onCheck: EventEmitter<Tarefa> = new EventEmitter();
  
  constructor(
    private fb: FormBuilder
  ) { }


  editar = false;
  visualizar = false;
  idEditar;
  idVisualizar;

  tarefaForm = this.fb.group(
    {
      nome: ['', [ Validators.required ]],
      descricao: ['']
    }
  );

  onClickEditar(tarefa: Tarefa , index) {
    this.editar = !this.editar;
    this.idEditar = index;
  }

  onClickVisualizar(tarefa: Tarefa, index) {
    this.visualizar = !this.visualizar;
    this.idVisualizar = index;
  }

  onClickExcluir(tarefa: Tarefa) {
    this.onExcluir.emit(tarefa);
  }

  onChangeCheckbox(tarefa) {
    this.onCheck.emit(tarefa);
  }

  onSubmitEditar(i){
    console.log(i);
    if (!this.tarefaForm.valid) return;
    let objeto =[this.tarefaForm.value, i];
    this.onEditar.emit(objeto);
  }
}
