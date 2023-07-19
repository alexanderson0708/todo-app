import { HttpParams } from "@angular/common/http";

export interface TodoModel {
  id:string
  title:string,
  completed:boolean,
  updated_at:string,
  created_at:string,
  user?:number|null
}

export interface TodoModelDto {
  title:string,
  completed:boolean,
  updated_at?:string,
  created_at?:string,
  user?:number|null
}

export interface TodoResponse{
    results:TodoModel[]
}
export interface TodoState {
  data: TodoResponse,
  breadcrumbsHeader:string,
  loading:boolean,
  loaded:boolean,
  error:Error|string|null,
}

export const initialTodoState:TodoState = {
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
