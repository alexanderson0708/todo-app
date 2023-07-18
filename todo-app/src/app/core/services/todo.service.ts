import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {TodoModel, TodoModelDto} from "../store";

const serverUrl = 'https://joldibaev.uz/api/'
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http:HttpClient) {
  }
  getTodos():Observable<TodoModel[]>{
    return (this.http.get(`${serverUrl}todo`) as Observable<TodoModel[]>)
  }
  createTodo(body:TodoModelDto){
    return (this.http.post(`${serverUrl}todo`, body) as Observable<TodoModel>)
  }
  getTodoById(id:string){
    return (this.http.get(`${serverUrl}todo/${id}`,) as Observable<TodoModel>)
  }
  updateTodo(id:string, body:TodoModelDto):Observable<TodoModel>{
    return (this.http.patch(`${serverUrl}todo/${id}`, body) as Observable<TodoModel>)
  }
  removeTodo(id:string):void{
    if(confirm("Do you really want to delete this course? Yes/No")){
      this.http.delete(`${serverUrl}todo/${id}`)
    }else{
      console.log('this course wasn\'t delete');
    }
  }
}

