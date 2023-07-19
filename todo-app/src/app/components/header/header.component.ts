import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../core/store/app.state";
import * as AuthSelectors from '../../core/store/auth-store/auth.selector'
import {Observable} from "rxjs";
import {login, logout} from "../../core/store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  username$:Observable<string> = this.store$.pipe(select(AuthSelectors.getEmail))
  isAuth$:Observable<boolean> = this.store$.pipe(select(AuthSelectors.isAuth))

  constructor(private store$:Store<AppState>) {
  }
  onLogout(){
    this.store$.dispatch(logout())
  }
}
