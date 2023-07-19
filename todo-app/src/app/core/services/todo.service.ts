import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TodoModel, TodoModelDto, TodoResponse} from "../store";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private updateId:BehaviorSubject<any> = new BehaviorSubject(null)
  constructor(private http:HttpClient) {
  }


  setUpdateId(id:string){
    this.updateId.next(id)
  }
  getUpdateId(){
    return this.updateId.asObservable()
  }

  getTodos():Observable<TodoResponse>{
    return (this.http.get(`/api/todo/`) as Observable<TodoResponse>)
  }
  createTodo(body:TodoModelDto){
    return (this.http.post(`/api/todo/`, body) as Observable<TodoModel>)
  }
  getTodoById(id:string){
    return (this.http.get(`/api/todo/${id}/`,) as Observable<TodoModel>)
  }
  updateTodo(id:string, body:TodoModelDto):Observable<TodoModel>{
    return (this.http.patch(`/api/todo/${id}/`, body) as Observable<TodoModel>)
  }
  removeTodo(id:string){
    return (this.http.delete(`/api/todo/${id}/`) as Observable<TodoModel>)
  }
}

