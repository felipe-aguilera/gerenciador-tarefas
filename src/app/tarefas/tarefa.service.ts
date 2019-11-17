import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Tarefa } from './tarefa.model';

@Injectable()
export class TarefaService {
  private sessionTarefaKey = 'tarefas';
  private tarefaId = 0;
  private tarefas = new BehaviorSubject<Tarefa[]>([]);
  public tarefaObservable = this.tarefas.asObservable();

  constructor() {
    this.getTarefasDaSessionStorage();
  }

  add(tarefa: Tarefa) {
    const tarefas = this.tarefas.getValue();
    tarefa.id = this.tarefaId++;
    tarefas.push(tarefa);

    this.tarefas.next(tarefas);

    localStorage.setItem(this.sessionTarefaKey, JSON.stringify(tarefas));
  }

  remove(tarefa: Tarefa) {
    const tarefas = this.tarefas.getValue();

    const filteredTarefas = tarefas.filter(it => it.id !== tarefa.id);

    this.tarefas.next(filteredTarefas);
    localStorage.setItem(this.sessionTarefaKey, JSON.stringify(tarefas));
  }

  update(tarefa) {
    const tarefas = this.tarefas.getValue();
    const index = tarefas.findIndex(it => it.id === tarefa.id);

    tarefas[index] = tarefa;
    
    this.tarefas.next(tarefas);
    localStorage.setItem(this.sessionTarefaKey, JSON.stringify(tarefas));
  }

  private getTarefasDaSessionStorage() {
    const tarefas = localStorage.getItem(this.sessionTarefaKey);
    if (tarefas) {
      this.tarefas.next(JSON.parse(tarefas));
    }
  }
}
