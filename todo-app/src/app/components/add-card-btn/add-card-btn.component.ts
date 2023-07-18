import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-card-btn',
  templateUrl: './add-card-btn.component.html',
  styleUrls: ['./add-card-btn.component.scss']
})
export class AddCardBtnComponent {
  constructor(private router:Router) {
  }
  goToCreateCard(){
    this.router.navigate(['/create-todo'])
  }
}
