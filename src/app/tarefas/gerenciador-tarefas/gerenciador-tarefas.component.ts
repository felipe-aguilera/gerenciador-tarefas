import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa } from '../tarefa.model';
import { TarefaService } from '../tarefa.service';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gerenciador-tarefas',
  templateUrl: './gerenciador-tarefas.component.html',
  styleUrls: ['./gerenciador-tarefas.component.css']
})
export class GerenciadorTarefasComponent implements OnInit {
  tarefas: Observable<Tarefa[]>;
  tarefaForm = this.fb.group(
    {
      nome: ['', [ Validators.required ]],
      descricao: ['']
    }
  );

  constructor(
    private tarefaService: TarefaService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.tarefas = this.tarefaService.tarefaObservable;
  }

  onEditar(tarefa: Tarefa) {
    console.log("onEditar", tarefa);
  }

  onVisualizar(tarefa: Tarefa) {
    console.log("Visualizar", tarefa);
  }

  onExcluir(tarefa: Tarefa) {
    console.log("onExcluir", tarefa);
    this.tarefaService.remove(tarefa);
  }

  onCheck(tarefa: Tarefa) {
    tarefa.concluido = !tarefa.concluido;
  }

  onSubmit() {
    if (!this.tarefaForm.valid) return;

    const tarefa = {...this.tarefaForm.value, concluido: false } as Tarefa;
    this.tarefaService.add(tarefa);
    this.tarefaForm.reset();
  }

}
