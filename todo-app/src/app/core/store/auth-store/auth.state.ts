export interface User {
  email:string;
  password:string;
}

export interface AuthToken {
  token:string
}

export interface AuthState {
  user:User|null,
  token?:AuthToken,
  loading:boolean,
  loaded:boolean,
  error:Error|null|string,
  authStatus:boolean,
}

export const initialAuthState:AuthState = {
  user:{
    email:'',
    password:''
  },
  token:{
    token:''
  },
  loading:false,
  loaded:true,
  error:null,
  authStatus:false,
}
