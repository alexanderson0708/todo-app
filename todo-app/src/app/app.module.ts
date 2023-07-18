import {isDevMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app-routing.module";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {MatButtonModule} from "@angular/material/button";
import {ErrPageComponent} from "./pages/error-page/err-page.component";
import { CreatePageComponent } from './pages/create-todo-page/create-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    AppComponent,
    ErrPageComponent,
    CreatePageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    MatButtonModule,
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly: !isDevMode()
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
