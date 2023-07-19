import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {ErrPageComponent} from "./pages/error-page/err-page.component";
import {CreatePageComponent} from "./pages/create-todo-page/create-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {EditPageComponent} from "./pages/edit-todo-page/edit-page.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes:Routes = [
  {path: '', component:MainPageComponent},
  {path: 'login', component:LoginPageComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'create-todo', component:CreatePageComponent, canActivate:[AuthGuard]},
  {path: 'update-todo', component:EditPageComponent, canActivate:[AuthGuard]},
  {path: 'error', component:ErrPageComponent},
  {path: '**', redirectTo:'error'},
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
