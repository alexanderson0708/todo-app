import {NgModule, Provider} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TodoStoreModule} from "./store/todo-store.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./interceptors/auth.interceptor";


const INTERCEPTOR_PROVIDER:Provider = {
  provide:HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true
}
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
        strictStateSerializability:false,
        strictActionSerializability:false,
        strictActionWithinNgZone:true,
        strictActionTypeUniqueness:true,
      }
    }),
    EffectsModule.forRoot([]),
  ],
  providers:[INTERCEPTOR_PROVIDER],
  exports:[]
})
export class CoreModule { }
