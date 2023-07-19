import { createReducer, on} from "@ngrx/store";
import {initialAuthState, User} from "./auth.state";
import * as AuthActions from './auth.action'

export const AUTH_FEATURE_NAME = 'auth'

export const authReducer = createReducer(initialAuthState,
  on(AuthActions.login, state =>{
    console.log('LOGIN action being handled!');
    return {
      ...state,
      loading:true
    }
  }),
  on(AuthActions.loginSuccess, (state, authData:any) =>{
    console.log('LOGIN SUCCESS action being handled!');
    return {
      ...state,
      authData,
      authStatus:true,
      loading:false,
      loaded:true,
      error:null
    }
  }),
  on(AuthActions.loginError, (state, {error}) =>{
    console.log('LOGIN ERROR action being handled!');
    return {
      ...state,
      loading:false,
      loaded:false,
      error:error,
      authStatus:false
    }
  }),

  on(AuthActions.logout, state =>{
    console.log('LOGOUT action being handled!');
    return {
      ...state,
      authData:null,
      loading:false,
      loaded:true,
      authStatus:false,
    }
  }),
)
