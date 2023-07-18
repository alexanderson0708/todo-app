import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsAuthDirective } from './directives/is-auth.directive';



@NgModule({
  declarations: [
    IsAuthDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IsAuthDirective
  ]
})
export class SharedModule { }
