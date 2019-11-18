import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuarios.service';

@Component({
  selector: 'app-gerenciador-usuarios',
  templateUrl: './gerenciador-usuarios.component.html',
  styleUrls: ['./gerenciador-usuarios.component.css']
})
export class GerenciadorUsuariosComponent implements OnInit {

  usuarios: Observable<Usuario[]>;
  usuariosForm = this.fb.group(
    {
      nome: ['', [ Validators.required ]],
      email: ['', [ Validators.required ]],
      senha: ['', [ Validators.required ]],
      permissao: ['',]
    }
  );

  constructor(
    private usuariosService: UsuarioService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.usuarios = this.usuariosService.usuarioObservable;
  }

  onExcluir(usuario: Usuario) {
    this.usuariosService.remove(usuario);
  }

  onSubmit() {
    if (!this.usuariosForm.valid) return;

    const usuario = {...this.usuariosForm.value} as Usuario;
    this.usuariosService.add(usuario);
    this.usuariosForm.reset();
  }

}
