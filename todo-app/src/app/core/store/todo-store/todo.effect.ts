import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects";
import * as TodoActions from './todo.action'
import { catchError, exhaustMap, of, map, switchMap,tap} from "rxjs";
import { Router } from "@angular/router";
import {TodoService} from "../../services/todo.service";
import {createTodoSuccess, updateTodoSuccess} from "./todo.action";
import {NotificationsService} from "../../services/notifications.service";


@Injectable()


export class TodoEffect{

  constructor(
    private todoService: TodoService,
    private actions:Actions,
    private router:Router,
    private notificationsService: NotificationsService
  ){
    console.log('[TODO_EFFECTS]');
  }

  getTodo$ = createEffect(()=>
    this.actions.pipe(
      ofType(TodoActions.getTodos),
      switchMap(()=>
        this.todoService.getTodos().pipe(
          map((todo)=> {
            return TodoActions.getTodosSuccess({todo})
          }
          ),
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
            map(todo =>
            {
              this.notificationsService.success('Todo has been updated!')
              return TodoActions.updateTodoSuccess({todo})
            }),
            catchError(error=>{
              this.notificationsService.error('Todo has not been updated!')
              return of(TodoActions.updateTodoError({error}))
            })
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
            map(todo => {
              this.notificationsService.success('Todo has been created!')
              return TodoActions.createTodoSuccess({todo})
            }),
            catchError(error => {
              this.notificationsService.error('Todo has not been created!')
              return of(TodoActions.createTodoError({error}))
            })
          )
      )
    )
  )

  removeTodo$ = createEffect(()=>
    this.actions.pipe(
      ofType(TodoActions.removeTodo),
      switchMap(({id}) =>
        this.todoService.removeTodo(id).pipe(
            map((todo) => {
              this.notificationsService.success('Todo has been deleted!')
              return TodoActions.removeTodoSuccess({todo})
            }),
            catchError(error => {
              this.notificationsService.error('Todo has not been deleted!')
              return of(TodoActions.removeTodoError({error}))
            })
          )
      )
    )
  )


  redirectAfterAdd$ = createEffect(()=>
    this.actions.pipe(
      ofType(createTodoSuccess),
      tap( () => {
        this.router.navigate(['/'])
      })
    ),{dispatch:false}
  )

  redirectAfterUpdate$ = createEffect(()=>
    this.actions.pipe(
      ofType(updateTodoSuccess),
      tap( () => {
        this.router.navigate(['/'])
      })
    ),{dispatch:false}
  )

}

