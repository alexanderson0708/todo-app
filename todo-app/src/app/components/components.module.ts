import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CardComponent } from './card/card.component';
import { ErrPageComponent } from './err-page/err-page.component';
import { HeaderComponent } from './header/header.component';
import { NewCardComponent } from './new-card/new-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { RemoveCardComponent } from './remove-card/remove-card.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatChipsModule} from "@angular/material/chips";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AddCardBtnComponent} from "./add-card-btn/add-card-btn.component";



@NgModule({
  declarations: [
    BreadcrumbComponent,
    CardComponent,
    ErrPageComponent,
    HeaderComponent,
    NewCardComponent,
    EditCardComponent,
    RemoveCardComponent,
    AddCardBtnComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    BreadcrumbComponent,
    CardComponent,
    ErrPageComponent,
    HeaderComponent,
    NewCardComponent,
    EditCardComponent,
    RemoveCardComponent,
    AddCardBtnComponent
  ],
})
export class ComponentsModule { }
