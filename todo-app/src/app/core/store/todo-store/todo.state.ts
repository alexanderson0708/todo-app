import { HttpParams } from "@angular/common/http";

export interface TodoModel {
  id:string
  title:string,
  completed:boolean,
  user:string
}

export interface TodoModelDto {
  title:string,
  completed:boolean,
  user:string
}
export interface TodoState {
  data: TodoModel[],
  breadcrumbsHeader:string,
  loading:boolean,
  loaded:boolean,
  error:Error|string|null,
}

export const initialTodoState:TodoState = {
  data:[
    {
      id: '',
      title:'',
      completed:false,
      user:'',
    },
  ],
  breadcrumbsHeader:'',
  loading:true,
  loaded:false,
  error:null,
}
