import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario.model';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

  @Input() usuarios: Observable<Usuario>;
  
  @Output() onEditar: EventEmitter<Usuario> = new EventEmitter();
  @Output() onVisualizar: EventEmitter<Usuario> = new EventEmitter();
  @Output() onExcluir: EventEmitter<Usuario> = new EventEmitter();

  onClickEditar(usuario: Usuario) {
    this.onEditar.emit(usuario);
  }

  onClickVisualizar(usuario: Usuario) {
    this.onVisualizar.emit(usuario);
  }

  onClickExcluir(usuario: Usuario) {
    this.onExcluir.emit(usuario);
  }
}
