import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class OnlyAdminGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.loginService.logadoObservable
      .pipe(
        tap(usuario => !usuario.permissao && this.router.navigateByUrl('/tarefas')),
        map(usuario => usuario.permissao),
      );
  }
}