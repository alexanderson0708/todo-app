import {Directive, ElementRef, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AuthService} from "../../core/services/auth.service";
import {AppState} from "../../core/store/app.state";
import * as AuthSelector from '../../core/store/auth-store/auth.selector'
@Directive({
  selector: '[appIsAuth]'
})
export class IsAuthDirective implements OnInit{

  isAuth$:Observable<boolean> = this.store$.pipe(select(AuthSelector.isAuth))
  constructor(
    private authService: AuthService,
    private elemRef: ElementRef,
    private store$:Store<AppState>
  ) { }

  ngOnInit() {
    this.isAuth$.subscribe(value => {
      value ? this.elemRef.nativeElement.style.display = 'flex' : this.elemRef.nativeElement.style.display = 'none'
    })
  }
}
