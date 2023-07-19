import { createAction, props } from "@ngrx/store";
import {AuthErrMsg, AuthState} from "./auth.state";

export const login = createAction(
  '[Auth] LOGIN',
  props<{email:string, password:string}>()
);
export const loginSuccess = createAction(
  '[Auth] LOGIN SUCCESS',
  props<{token:string}>()
);
export const loginError = createAction(
  '[Auth] LOGIN ERROR',
  props<{error:AuthErrMsg}>()
);

export const logout = createAction('[Auth] LOGOUT')

export const loadStateLocal = createAction(
  '[Load state from local] LOAD STATE',
  props<{authState:AuthState}>()
)
