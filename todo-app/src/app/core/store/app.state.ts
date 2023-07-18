import {AuthState} from "./auth-store/auth.state";
import {TodoState} from "./todo-store/todo.state";

export interface AppState{
  authState:AuthState,
  todoState:TodoState
}
