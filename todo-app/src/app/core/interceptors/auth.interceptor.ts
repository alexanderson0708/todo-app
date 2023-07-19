import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, mergeMap, Observable, take, throwError} from 'rxjs';
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/app.state";
import * as AuthSelectors from '../store/auth-store/auth.selector'
import {Router} from "@angular/router";
import {NotificationsService} from "../services/notifications.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store$:Store<AppState>,
              private router:Router,
              private notifications:NotificationsService
              ) {
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store$.pipe(
      select(AuthSelectors.getAccessToken),
      take(1),
      mergeMap(token => {
        if(token){
          request = request.clone({
            setHeaders:{
              Authorization: `Token ${token}`
            }
          });
        }
        return next.handle(request).pipe(
          catchError((err) => {
            if (err instanceof HttpErrorResponse){
              if(err.status===401){
                this.notifications.error('Unauthorized')
                this.router.navigate(['/login'])
              }
            }
            return throwError(err)
          })
        )
      })
    )
  }
}
