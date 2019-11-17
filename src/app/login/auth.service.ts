import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios/usuario.model';

@Injectable()
export class AuthService {

  constructor() { }

  public login(userInfo: Usuario){
    localStorage.setItem('ACCESS_TOKEN', "userInfo");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}