import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../core/store/app.state";
import {DomSanitizer} from "@angular/platform-browser";
import {AuthService} from "../../core/services/auth.service";
import * as TodoSelectors from '../../core/store/todo-store/todo.selector'
import {map, Observable} from "rxjs";
import {getTodos, login, removeTodo, TodoModel, updateTodo} from "../../core/store";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {TodoService} from "../../core/services/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  isLoading$:Observable<boolean> = this.store$.pipe(select(TodoSelectors.getLoading))
  todos$:Observable<TodoModel[]>
  constructor(
    private store$:Store<AppState>,
    private domSanitizer:DomSanitizer,
    private authService:AuthService,
    private todoService:TodoService,
    private router:Router
  ) {
    this.todos$ = this.store$.pipe(select(TodoSelectors.getTodos)).pipe(
      map((res:any) => res.results
    ))
  }

  ngOnInit() {
    this.store$.dispatch(getTodos())
  }

  checkTodo(event:MatCheckboxChange, todo:TodoModel){
    this.store$.dispatch(
      updateTodo({id:todo.id, body:{...todo, completed:event.checked}})
    )
  }
  update(id:string){
    this.todoService.setUpdateId(id)
    this.router.navigate(['/update-todo'])
  }
  delete(id:string){
    this.store$.dispatch(removeTodo({id}))
  }

}
