import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects";
import * as TodoActions from './todo.action'
import { catchError, exhaustMap, of, map, switchMap,tap} from "rxjs";
import { Router } from "@angular/router";
import {TodoService} from "../../services/todo.service";


@Injectable()


export class TodoEffect{

  constructor(
    private todoService: TodoService,
    private actions:Actions,
    private router:Router
  ){
    console.log('[TODO_EFFECTS]');
  }

  getTodo$ = createEffect(()=>
    this.actions.pipe(
      ofType(TodoActions.getTodos),
      switchMap(()=>
        this.todoService.getTodos().pipe(
          map((todo)=>TodoActions.getTodosSuccess({todo})),
          catchError((error)=>of(TodoActions.getTodosError({error})))
        )
      )
    )
  )

  getTodoById$ = createEffect(()=>
    this.actions.pipe(
      ofType(TodoActions.getTodoById),
      switchMap(({id})=>
        this.todoService.getTodoById(id).pipe(
          map((todo)=>TodoActions.getTodoByIdSuccess({todo})),
          catchError((error)=>of(TodoActions.getTodoByIdError({error})))
        )
      )
    )
  )

  updateTodo$ = createEffect(()=>
    this.actions.pipe(
      ofType(TodoActions.updateTodo),
      switchMap(({id, body}) =>
        this.todoService.updateTodo(id, body).pipe(
            map(todo => TodoActions.updateTodoSuccess({todo})),
            catchError(error=>of(TodoActions.updateTodoError({error})))
          )
      )
    )
  )


  createTodo$ = createEffect(()=>
    this.actions.pipe(
      ofType(TodoActions.createTodo),
      switchMap((body) =>
        this.todoService.createTodo(body.createTodo)
          .pipe(
            map(todo => TodoActions.createTodoSuccess({todo})),
            catchError(error=>of(TodoActions.createTodoError({error})))
          )
      )
    )
  )

  // removeTodo$ = createEffect(()=>
  //   this.actions.pipe(
  //     ofType(TodoActions.removeTodo),
  //     switchMap(({id}) =>
  //       this.todoService.removeTodo(id).pipe(
  //           map(() => TodoActions.removeTodoSuccess()),
  //           catchError(error => of(TodoActions.removeTodoError({error})))
  //         )
  //     )
  //   )
  // )


}

