import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(private snackBar:MatSnackBar) { }

  public openSnackBar(
    message:string,
    action:string,
    className = '',
    duration = 5000
  ){
    this.snackBar.open(message, action, {
      duration:duration,
      panelClass: [className]
    })
  }

  public success(message:string){
    this.openSnackBar(message, '' , 'success-snackbar')
  }

  public error(message:string){
    this.openSnackBar(message, '' , 'error-snackbar')
  }

}
