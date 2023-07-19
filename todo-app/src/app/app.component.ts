import {Component, OnInit} from '@angular/core';
import {LoadingBlockService} from "./core/services/loading-block.service";
import {combineLatest, Observable, withLatestFrom} from "rxjs";
import {select, Store} from "@ngrx/store";
import * as AuthSelectors from "./core/store/auth-store/auth.selector";
import * as TodoSelectors from "./core/store/todo-store/todo.selector";
import {AppState} from "./core/store/app.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-app';

  isLoadingAuth$:Observable<boolean> = this.store$.pipe(select(AuthSelectors.getLoading))
  isLoadingTodo$:Observable<boolean> = this.store$.pipe(select(TodoSelectors.getLoading))

  public isLoading:boolean = true
  constructor(
    private loadingBlock:LoadingBlockService,
    private store$:Store<AppState>
  ){
  }
  ngOnInit() {

    combineLatest([this.isLoadingAuth$, this.isLoadingTodo$])
      .subscribe(([authValue, todoValue]) => {
      console.log('Auth', authValue)
      console.log('Todo', todoValue)
      if (authValue || todoValue){
        this.loadingBlock.showIndicator()
      }else{
        this.loadingBlock.hideIndicator()
      }
    })

    this.loadingBlock._isLoading$.subscribe(value => {
      setTimeout(() => {
        this.isLoading = value
      })
    })
  }

}
