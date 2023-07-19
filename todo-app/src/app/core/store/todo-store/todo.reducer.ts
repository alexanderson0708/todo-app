import { Action, createReducer, on } from "@ngrx/store";
import {initialTodoState, TodoModel, TodoResponse} from "./todo.state";
import * as todoActions from '../todo-store/todo.action'
import {updateTodo} from "../todo-store/todo.action";
import * as AuthActions from "../auth-store/auth.action";

export const TODO_FEATURE_NAME = 'todo'

export const todoReducer = createReducer(
  initialTodoState,
//---------------------------GET_TODO------------------------------
  on(todoActions.getTodos, state =>{
    console.log('GET_TODO action being handled!');
    return {
      ...state,
      loading:true,
    };
  }),
  on(todoActions.getTodosSuccess, (state, {todo}) =>{
    console.log('GET_TODO_SUCCESS action being handled!');
    const data = todo.results
    return {
      ...state,
      data:{
        results:data
      },
      loading:false,
      loaded:true,
    };
  }),
  on(todoActions.getTodosError, (state, {error}) =>{
    console.log('GET_TODO_ERROR action being handled!');
    return {
      ...state,
      loading:false,
      loaded:false,
      error,
    }
  }),

//---------------------------CREATE COURSES-------------------------
  on(todoActions.createTodo, (state, {createTodo}) =>{
    console.log('CREATE_TODO action being handled!');
    return {
      ...state,
      loading:true,
    }
  }),
  on(todoActions.createTodoSuccess, (state, {todo}) =>{
    console.log('CREATE_TODO action being handled!');
    const {id, user, completed,title} = todo
    return {
      ...state,
      data:{
        results: [
          {
            id:id,
            user:user,
            completed:completed,
            title:title,
            created_at:'',
            updated_at:'',
          },
          ...state.data.results
        ]
      },
      loading:false,
      loaded:true,
    }
  }),
  on(todoActions.createTodoError, (state, {error}) =>{
    console.log('CREATE_TODO_ERROR action being handled!');
    return {...state,
      loading:false,
      loaded:false,
      error
    }
  }),
//---------------------------REMOVE COURSES------------------------
  on(todoActions.removeTodo, (state, {id}) =>{
    console.log('REMOVE_TODO action being handled!');
    const data = state.data.results.filter(el => el.id !== id)
    return {
      ...state,
      data:{
        results:data
      },
      loading:true,
    }
  }),
  on(todoActions.removeTodoError, (state, {error}) =>{
    console.log('REMOVE_TODO_ERROR action being handled!');
    return {
      ...state,
      loading:false,
      loaded:false,
      error,
    }
  }),
  on(todoActions.removeTodoSuccess, (state, {todo}) =>{
    console.log('REMOVE_TODO_SUCCESS action being handled!');
    return {
      ...state,
      loading:false,
      loaded:true,
    }
  }),
//---------------------------------UPDATE_TODO---------------------------------
  on(todoActions.updateTodo, (state, {id}) =>{
    console.log('UPDATE_TODO action being handled!');
    return {
      ...state,
      loading:true,
    }
  }),
  on(todoActions.updateTodoError, (state, {error}) =>{
    console.log('UPDATE_TODO_ERROR action being handled!');
    return {
      ...state,
      loading:false,
      loaded:false,
      error,
    }
  }),
  on(todoActions.updateTodoSuccess, (state, {todo}) =>{
    console.log('UPDATE_TODO_SUCCESS action being handled!');
    const data = state.data.results.map((el) => todo.id === el.id ? todo : el)
    return {
      ...state,
      data:{
        results:data
      },
      loading:false,
      loaded:true,
    }
  }),
  on(todoActions.updateBreadcrumbs, (state, {breadCrumbsHeader}) =>{
    console.log('UPDATE_BREADCRUMBS action being handled!');
    return {
      ...state,
      breadCrumbsHeader
    }
  }),
  on(todoActions.logoutTodo, state =>{
    console.log('LOGOUT_TODO action being handled!');
    return {
      data:{
        results:[
          {
            id: '',
            title:'',
            completed:false,
            updated_at:'',
            created_at:'',
            user:null
          },
        ]
      },
      breadcrumbsHeader:'',
      loading:false,
      loaded:false,
      error:null,
    }
  }),
)

