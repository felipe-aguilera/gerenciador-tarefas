import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarefa } from '../tarefa.model';

@Component({
  selector: 'app-gerenciador-tarefas',
  templateUrl: './gerenciador-tarefas.component.html',
  styleUrls: ['./gerenciador-tarefas.component.css']
})
export class GerenciadorTarefasComponent implements OnInit {

  tarefas = new BehaviorSubject<Tarefa[]>([]);
  
  constructor() { }

  ngOnInit() {
    const tarefas = [
      {
        nome: "Item 1",
        descricao: "Item 1 desc",
        concluido: false
      },
      {
        nome: "Item 2",
        concluido: false
      },
    ] as Tarefa[];

    this.tarefas.next(tarefas);
  }

  onEditar(tarefa: Tarefa) {
    console.log("onEditar", tarefa);
  }

  onVisualizar(tarefa: Tarefa) {
    console.log("Visualizar", tarefa);
  }

  onExcluir(tarefa: Tarefa) {
    console.log("onExcluir", tarefa);
  }

}
