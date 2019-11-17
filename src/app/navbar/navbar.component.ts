import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Usuario } from '../usuarios/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logado: Observable<Usuario>;
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.logado = this.loginService.logadoObservable.pipe(tap(console.log));
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
}
