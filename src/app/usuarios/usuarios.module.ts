import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './usuarios.service';
import { GerenciadorUsuariosComponent } from './gerenciador-usuarios/gerenciador-usuarios.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [GerenciadorUsuariosComponent, ListaUsuariosComponent],
  providers: [UsuarioService],
})
export class UsuariosModule { }
