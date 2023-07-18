import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/app.state";
import {AuthService} from "../services/auth.service";
import * as AuthSelector from '../../core/store/auth-store/auth.selector'

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{
  isAuth$:Observable<boolean> = this.store$.pipe(select(AuthSelector.isAuth))

  constructor(
    private store$:Store<AppState>,
    private router:Router,
    private authService:AuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let trigger:boolean|Promise<boolean> = false
    this.isAuth$.subscribe(value => {
      value ? trigger = true : trigger = this.router.navigate(['/login'])
    })
    return trigger

  }
}
