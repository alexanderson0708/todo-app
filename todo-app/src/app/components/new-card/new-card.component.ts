import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent {
  constructor(private router:Router) {
  }
  goToHome(){
    this.router.navigate(['/'])
  }
}
