import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {NewCardComponent} from "./components/new-card/new-card.component";
import {ErrPageComponent} from "./components/err-page/err-page.component";

const routes:Routes = [
  {path: '', component:MainPageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'create-todo', component:NewCardComponent},
  {path: 'error', component:ErrPageComponent},
  {path: '**', redirectTo:'error'},
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
