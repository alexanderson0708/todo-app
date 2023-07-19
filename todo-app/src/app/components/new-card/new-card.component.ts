import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {createTodo, login, TodoModelDto} from "../../core/store";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../core/store/app.state";
import * as AuthSelectors from '../../core/store/auth-store/auth.selector'
import {Observable} from "rxjs";
import {getUserId} from "../../core/store/auth-store/auth.selector";
@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent {

  userId$:number|null = null
  newTodoGroup: FormGroup
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private store$:Store<AppState>
              ) {
    this.store$.pipe(select(getUserId)).subscribe(value => {
      this.userId$ = value
    })

    this.newTodoGroup = this.fb.group({
      title:[,
        [Validators.required,Validators.maxLength(50)]
      ],
      date:[,
        [Validators.required]
      ],
      description:[],
      completed:[false,
        [Validators.required]
      ],
    })

  }
  addTodo(){
    const body:TodoModelDto = {
      title:this.newTodoGroup.value.title,
      completed:this.newTodoGroup.value.completed,
      created_at:this.newTodoGroup.value.date,
      // updated_at:this.newTodoGroup.value.date,
      user:this.userId$
    }
    this.store$.dispatch(createTodo({createTodo:body}))
  }
  goToHome(){
    this.router.navigate(['/'])
  }
}
