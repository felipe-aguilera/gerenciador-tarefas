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
  excluir = false
  idEditar;
  idVisualizar;
  idExcluir;

  tarefaForm = this.fb.group(
    {
      nome: ['', [ Validators.required ]],
      descricao: ['']
    }
  );

  onClickEditar(index) {
    this.editar = !this.editar;
    this.idEditar = index;
  }

  onClickVisualizar(index) {
    this.visualizar = !this.visualizar;
    this.idVisualizar = index;
  }

  onClickExcluir(index) {
    // this.onExcluir.emit(tarefa);
    this.excluir = !this.excluir;
    this.idExcluir = index;
  }

  excluirTarefa(tarefa:Tarefa) {
    this.onExcluir.emit(tarefa);
  }

  onChangeCheckbox(tarefa) {
    this.onCheck.emit(tarefa);
  }

  onSubmitEditar(i){
    if (!this.tarefaForm.valid) return;
    let objeto =[this.tarefaForm.value, i];
    this.onEditar.emit(objeto);
  }
}
