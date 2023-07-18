import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../core/store/app.state";
import {Observable} from "rxjs";
import * as AuthSelectors from '../../core/store/auth-store/auth.selector'
import {AuthToken, login} from "../../core/store";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input() formError = ''
  formGroup : FormGroup

  loading$: Observable<boolean> = this.store$.pipe(select(AuthSelectors.getLoading))
  loaded$: Observable<boolean> = this.store$.pipe(select(AuthSelectors.getLoaded))
  error$: Observable<Error|null|string> = this.store$.pipe(select(AuthSelectors.getServerError))
  isAuth$: Observable<boolean> = this.store$.pipe(select(AuthSelectors.isAuth))
  getToken$: Observable<string|AuthToken|undefined> = this.store$.pipe(select(AuthSelectors.getAccessToken))

  constructor(
    private router:Router,
    // private loadingBlock: LoadingBlockService
    private store$:Store<AppState>
  ) {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    })
  }


  goToRegistration(){
    this.router.navigate(['/registration'])
  }
  goToHome(){
    this.router.navigate(['/'])
  }

  onFormChange(){
    this.formError = ''
  }

  onLogin(){
    this.store$.dispatch(login(this.formGroup.value))
    console.log()
  }
}
