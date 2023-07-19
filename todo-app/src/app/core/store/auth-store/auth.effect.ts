import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {AuthService} from "../../services/auth.service";
import {login, loginError, loginSuccess, logout} from "./auth.action";
import {map, of, switchMap, catchError, tap} from 'rxjs'
import { Router } from "@angular/router";

@Injectable()

export class AuthEffect{

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap( action => this.authService.login({
      email: action.email,
      password: action.password
      }
    ).pipe(
      map(loginSuccessData => loginSuccess(loginSuccessData)),
      catchError(error => of(loginError({error})))
      ))
  ))

  redirectAfterSubmit$ = createEffect(()=>
    this.actions$.pipe(
      ofType(loginSuccess),
      tap( () => {
        this.router.navigate(['/'])
      })
    ),{dispatch:false}
  )

  logout$ = createEffect(() => this.actions$.pipe(
      ofType(logout),
      tap( () =>{
        this.authService.logout()
        this.router.navigate(['/'])
      })
    ),{dispatch:false}
  )

  constructor(
    private actions$:Actions,
    private authService:AuthService,
    private router:Router,
  ){
    console.log('[AUTH_EFFECTS]');
  }
}
