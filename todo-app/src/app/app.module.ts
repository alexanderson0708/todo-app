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
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {EditPageComponent} from "./pages/edit-todo-page/edit-page.component";

@NgModule({
  declarations: [
    MainPageComponent,
    AppComponent,
    ErrPageComponent,
    CreatePageComponent,
    LoginPageComponent,
    EditPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ComponentsModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode()
    }),
    EffectsModule.forRoot([]),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
