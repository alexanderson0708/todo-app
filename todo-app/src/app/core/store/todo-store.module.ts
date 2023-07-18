import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {AUTH_FEATURE_NAME, authReducer} from "./auth-store/auth.reducer";
import {TODO_FEATURE_NAME, todoReducer} from "./todo-store/todo.reducer";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffect} from "./auth-store/auth.effect";
import {TodoEffect} from "./todo-store/todo.effect";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTH_FEATURE_NAME, authReducer),
    StoreModule.forFeature(TODO_FEATURE_NAME, todoReducer),
    EffectsModule.forFeature([AuthEffect]),
    EffectsModule.forFeature([TodoEffect])
  ]
})
export class TodoStoreModule { }
