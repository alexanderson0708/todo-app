import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {createTodo, login, TodoModelDto, updateTodo} from "../../core/store";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../core/store/app.state";
import {getUserId} from "../../core/store/auth-store/auth.selector";
import {TodoService} from "../../core/services/todo.service";
@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent {
  userId$:number|null = null
  editTodoGroup: FormGroup
  receiveUpdateId:any;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private store$:Store<AppState>,
    private todoService:TodoService
  ) {
    this.todoService.getUpdateId().subscribe( id => {
      this.receiveUpdateId = id
    })
    this.store$.pipe(select(getUserId)).subscribe(value => {
      this.userId$ = value
    })

    this.editTodoGroup = this.fb.group({
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
  updateTodo(){
    const body:TodoModelDto = {
      title:this.editTodoGroup.value.title,
      completed:this.editTodoGroup.value.completed,
      // created_at:this.newTodoGroup.value.date,
      updated_at:this.editTodoGroup.value.date,
      user:this.userId$
    }
    this.store$.dispatch(updateTodo({id:this.receiveUpdateId, body:body}))
  }
  goToHome(){
    this.router.navigate(['/'])
  }
}
