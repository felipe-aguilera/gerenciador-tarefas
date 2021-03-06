import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Usuario } from './usuario.model';

@Injectable()
export class UsuarioService {
  private sessionUsuarioKey = 'usuario';
  private usuarioId = 0;
  private usuarios = new BehaviorSubject<Usuario[]>([]);
  public usuarioObservable = this.usuarios.asObservable();

  constructor() {
    this.getUsuariosDoStorage();
  }

  add(usuario: Usuario) {
    const usuarios = this.usuarios.getValue();
    usuario.id = this.usuarioId++;
    usuarios.push(usuario);

    this.usuarios.next(usuarios);

    localStorage.setItem(this.sessionUsuarioKey, JSON.stringify(usuarios));
  }

  remove(usuario: Usuario) {
    const usuarios = this.usuarios.getValue();

    const filteredUsuarios = usuarios.filter(it => it.id !== usuario.id);

    this.usuarios.next(filteredUsuarios);
    localStorage.setItem(this.sessionUsuarioKey, JSON.stringify(filteredUsuarios));
  }

  getUsuariosDoStorage() {
    const usuarios = localStorage.getItem(this.sessionUsuarioKey);
    
    if (usuarios) {
      const objetosUsuario = JSON.parse(usuarios);
      this.usuarios.next(objetosUsuario);
      return objetosUsuario;
    }
    
    return false;
  }
}
