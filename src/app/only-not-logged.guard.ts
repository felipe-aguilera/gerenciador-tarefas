import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
import { map } from 'rxjs/operators';

@Injectable()
export class OnlyNotLogged implements CanActivate {
  constructor(
      private loginService: LoginService,
      private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.loginService.logadoObservable
      .pipe(map((usuario) => {
          if (usuario) {
              this.router.navigateByUrl('/tarefas');
              return false;
          }
          return true;
      }));
  }
}