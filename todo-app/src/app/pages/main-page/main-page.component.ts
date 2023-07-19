import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../core/store/app.state";
import {Observable} from "rxjs";
import * as AuthSelectors from '../../core/store/auth-store/auth.selector'
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  isAuth$:Observable<boolean>
  constructor(private store$:Store<AppState>) {
    this.isAuth$ = this.store$.pipe(select(AuthSelectors.isAuth))
  }
}
