import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { LoginModule } from './login/login.module';
import { NavbarComponent } from './navbar/navbar.component';
import { OnlyNotLogged } from './only-not-logged.guard';
import { AuthGuard } from './auth.guard';
import { OnlyAdminGuard } from './only-admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TarefasModule,
    UsuariosModule,
    LoginModule
  ],
  providers: [OnlyNotLogged, AuthGuard, OnlyAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
