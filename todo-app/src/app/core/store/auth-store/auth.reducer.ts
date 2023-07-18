import { Action, createReducer, on, props } from "@ngrx/store";
import {AuthToken, initialAuthState} from "./auth.state";
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
  on(AuthActions.loginSuccess, (state, authData:AuthToken) =>{
    console.log('LOGIN SUCCESS action being handled!');
    return {
      ...state,
      authData,
      authStatus:true,
      loading:false,
      loaded:true,
      error:''
    }
  }),
  on(AuthActions.loginError, (state, {error}) =>{
    console.log('LOGIN ERROR action being handled!');
    return {
      ...state,
      loading:true,
      loaded:false,
      error,
      authStatus:false
    }
  }),
  // on(AuthActions.getUserInfo, state =>{
  //   console.log('GET USER INFO action being handled!');
  //   return {
  //     ...state,
  //     loading:true,
  //   }
  // }),
  // on(AuthActions.getUserInfoError, (state, {error}) =>{
  //   console.log('GET USER INFO ERROR action being handled!');
  //   return {
  //     ...state,
  //     loading:true,
  //     loaded:false,
  //     error,
  //   }
  // }),
  // on(AuthActions.getUserInfoSuccess, (state, {user}) =>{
  //   console.log('GET USER INFO SUCCESS action being handled!');
  //   return {
  //     ...state,
  //     user,
  //     authStatus:true,
  //     loading:false,
  //     loaded:true,
  //     error:''
  //   }
  // }),
  on(AuthActions.logout, state =>{
    console.log('LOGOUT action being handled!');
    return {
      ...state,
      user:null,
      token:{token:''},
      loading:false,
      loaded:true,
      authStatus:false,
    }
  }),
)
