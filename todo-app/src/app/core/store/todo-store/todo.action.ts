import { HttpParams } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import {TodoModel, TodoModelDto, TodoResponse} from "./todo.state";

//-------------GET_TODO-----------//

export const getTodos = createAction('[TODO (App)] GET_TODOS')

export const getTodosSuccess = createAction(
  '[TODO] GET_TODOS_SUCCESS',
  props<{todo:TodoResponse}>())

export const getTodosError = createAction(
  '[TODO] GET_TODOS_ERROR',
  props<{error:Error|string|null}>()
)

//-------------GET_TODO_BY_ID-----------//

export const getTodoById = createAction(
  '[TODO] GET_TODO_BY_ID',
  props<{id:string}>()
)
export const getTodoByIdSuccess = createAction(
  '[TODO] GET_TODO_BY_ID_SUCCESS',
  props<{todo:TodoModel}>()
)
export const getTodoByIdError = createAction(
  '[TODO] GET_TODO_BY_ID_ERROR',
  props<{error:Error|string|null}>()
)

//-------------REMOVE COURSE-----------//

export const removeTodo = createAction(
  '[TODO] REMOVE_TODO',
  props<{id:string}>()
)
export const removeTodoSuccess = createAction(
  '[TODO] REMOVE_TODO_SUCCESS',
  props<{todo:TodoModel}>()
)
export const removeTodoError = createAction(
  '[TODO] REMOVE_TODO_ERROR',
  props<{error:Error|string|null}>()
)

//-------------CREATE_TODO-----------//
export const createTodo = createAction(
  '[TODO] CREATE_TODO',
  props<{createTodo:TodoModelDto}>()
)
export const createTodoSuccess = createAction(
  '[TODO] CREATE_TODO_SUCCESS',
  props<{todo:TodoModel}>()
)
export const createTodoError = createAction(
  '[TODO] CREATE_TODO_ERROR',
  props<{error:Error|string|null}>()

)

//-------------UPDATE_TODO-----------//
export const updateTodo = createAction(
  '[TODO] UPDATE_TODO',
  props<{id:string, body:TodoModelDto}>()
)
export const updateTodoSuccess = createAction(
  '[TODO] UPDATE_TODO_SUCCESS',
  props<{todo:TodoModel}>()
)
export const updateTodoError = createAction(
  '[TODO] UPDATE_TODO_ERROR',
  props<{error:Error|string|null}>()
)

export const updateBreadcrumbs = createAction(
  '[TODO] UPDATE Breadcrumbs',
  props<{breadCrumbsHeader:string}>()
)
