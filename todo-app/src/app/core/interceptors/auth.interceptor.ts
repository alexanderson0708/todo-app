import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/app.state";
import * as AuthSelectors from '../store/auth-store/auth.selector'
import {AuthToken} from "../store";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token$:Observable<string|AuthToken|undefined> = this.store$.pipe(select(AuthSelectors.getAccessToken))
  constructor(private store$:Store<AppState>) {
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cloned = request.clone({
      headers: request.headers.append('Auth', this.token$+'')
    })
    return next.handle(cloned);
  }
}
