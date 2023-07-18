import {Component, OnInit} from '@angular/core';
import {LoadingBlockService} from "./core/services/loading-block.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-app';
  public isLoading:boolean = true
  constructor(private loadingBlock:LoadingBlockService) {
  }
  ngOnInit() {
    this.loadingBlock._isLoading$.subscribe(value => {
      setTimeout(()=>{
        this.isLoading = value
      })
    })
  }

}
