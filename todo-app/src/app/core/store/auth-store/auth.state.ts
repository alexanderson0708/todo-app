export interface User {
  token:string,
  username: string,
  user_id:number,
  type?:string
}


export interface AuthState {
  authData:User|null,
  loading:boolean,
  loaded:boolean,
  error?:AuthErrMsg|null
  authStatus:boolean,
}

export interface AuthErrMsg{
  error:{
    message:string
  }
}
export const initialAuthState:AuthState = {
  authData:null,
  loading:false,
  loaded:true,
  error:null,
  authStatus:false,
}
