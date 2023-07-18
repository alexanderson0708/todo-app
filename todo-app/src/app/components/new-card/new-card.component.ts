import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent {

  selected = 'main'
  newTodoGroup: FormGroup
  constructor(
    private router:Router,
    private fb:FormBuilder
              ) {
    this.newTodoGroup = this.fb.group({
      title:[,
        [Validators.required,Validators.maxLength(50)]
      ],
      date:[,
        [Validators.required]
      ],
      priority:[,
        [Validators.required]
      ],
    })

  }
  goToHome(){
    this.router.navigate(['/'])
  }
}
