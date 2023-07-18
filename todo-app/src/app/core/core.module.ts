import { NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TodoStoreModule} from "./store/todo-store.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TodoStoreModule,
    StoreModule.forRoot({}, {
      runtimeChecks:{
        strictStateImmutability:true,
        strictActionImmutability:true,
        strictStateSerializability:true,
        strictActionSerializability:false,
        strictActionWithinNgZone:true,
        strictActionTypeUniqueness:true,
      }
    }),
    EffectsModule.forRoot([]),
  ],
  providers:[],
  exports:[]
})
export class CoreModule { }
