import {Component, OnInit} from '@angular/core';
import {LoadingBlockService} from "./core/services/loading-block.service";
import {Observable, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "./core/store/app.state";
import * as AuthSelectors from './core/store/auth-store/auth.selector'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-app';
  public isLoading:boolean = true
  constructor(
    private loadingBlock:LoadingBlockService,
    private loadingService:LoadingBlockService,
    private store$:Store<AppState>
  ){
  }
  ngOnInit() {
    this.store$.pipe(select(AuthSelectors.getLoading)).subscribe(value => {
      value ? this.loadingService.showIndicator() : this.loadingService.hideIndicator()
    })
    this.loadingBlock._isLoading$.subscribe(value => {
      this.isLoading = value
      console.log(this.isLoading)
    })
  }

}
