import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {removeTodo} from "../../core/store";
import {Store} from "@ngrx/store";
import {AppState} from "../../core/store/app.state";

@Component({
  selector: 'app-remove-card',
  templateUrl: './remove-card.component.html',
  styleUrls: ['./remove-card.component.scss']
})
export class RemoveCardComponent {
  constructor(
    public dialogRef:MatDialogRef<RemoveCardComponent>
  ) {
  }
  onAccept(){
    this.dialogRef.close('accept')
  }
  onCancel(){
    this.dialogRef.close('cancel')
  }

}
