import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuarios/usuarios.service';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../usuarios/usuario.model';
import * as deepEqual from "deep-equal";

@Injectable()
export class LoginService {

  private administrador = {
    nome: 'admin',
    senha: 'admin',
  };

  private logado = new BehaviorSubject<Usuario>(null);
  logadoObservable = this.logado.asObservable();
  
  constructor(
    private usuariosService: UsuarioService,
  ) {
    this.verificaUsuarioLogado();
  }

  logar(login): boolean {
    
    if (deepEqual(login, this.administrador)) {
      const currentUser = {...this.administrador, permissao: true } as Usuario;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));

      this.logado.next(currentUser);
      return true;
    }

    const usuarios = this.usuariosService.getUsuariosDoStorage();
    
    if (!usuarios) return false;

    const currentUser = usuarios.find(usuario => usuario.nome === login.nome && usuario.senha === login.senha );
    
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.logado.next(currentUser);
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.logado.next(null);
  }

  private verificaUsuarioLogado() {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      this.logado.next(JSON.parse(currentUser));
    }
  }
}
