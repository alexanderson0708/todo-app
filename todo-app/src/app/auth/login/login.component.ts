import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../core/store/app.state";
import {Observable} from "rxjs";
import * as AuthSelectors from '../../core/store/auth-store/auth.selector'
import {login} from "../../core/store";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {LoadingBlockService} from "../../core/services/loading-block.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  @Input() formError = ''
  formGroup : FormGroup

  loading$: Observable<boolean> = this.store$.pipe(select(AuthSelectors.getLoading))
  loaded$: Observable<boolean> = this.store$.pipe(select(AuthSelectors.getLoaded))
  error$: string = ''
  isAuth$: Observable<boolean> = this.store$.pipe(select(AuthSelectors.isAuth))
  getToken$: Observable<string|null> = this.store$.pipe(select(AuthSelectors.getAccessToken))

  constructor(
    private authService:AuthService,
    private router:Router,
    // private loadingBlock: LoadingBlockService
    private store$:Store<AppState>,
    private loadingService:LoadingBlockService
  ) {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])

    })
  }

  ngOnInit() {
    this.store$.pipe(select(AuthSelectors.getServerErrorMsg)).subscribe(value => {
      this.error$ = value
    })

    this.loading$.subscribe(value => {
      value ? this.loadingService.showIndicator() : this.loadingService.hideIndicator()
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

  }
}
