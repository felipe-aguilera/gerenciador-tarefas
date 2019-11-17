import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from  '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.fb.group(
    {
      nome: ['', [ Validators.required ]],
      senha: ['', [ Validators.required ]],
    }
  );

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  onSubmit() {
    if(this.loginForm.invalid) return;

    const logado = this.loginService.logar(this.loginForm.value);
    if (logado) {
      this.router.navigateByUrl('/tarefas');
    } else {
      console.error('errrou');
      // aleerta que deu ruim
    }
  }
}
