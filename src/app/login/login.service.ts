import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuarios/usuarios.service';
import { Observable } from 'rxjs';
import { Usuario } from '../usuarios/usuario.model';
import * as deepEqual from "deep-equal";

@Injectable()
export class LoginService {

  private administrador = {
    nome: 'admin',
    senha: 'admin',
  };

  constructor(
    private usuariosService: UsuarioService,
  ) { }

  logar(login): boolean {
    
    if (deepEqual(login, this.administrador)) {
      const currentUser = {...this.administrador, permissao: true } as Usuario;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      return true;
    }

    const usuarios = this.usuariosService.getUsuariosDoStorage();
    const currentUser = usuarios.find(usuario => usuario.nome === login.nome && usuario.senha === login.senha );
    
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      return true;
    }

    return false;
  }
}
