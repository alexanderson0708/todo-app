import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoadingBlockService{
  public _isLoading$ = new BehaviorSubject(false)

  showIndicator(){
    this._isLoading$.next(true)
    console.log('show!')
  }

  hideIndicator(){
    this._isLoading$.next(false)
    console.log('hide!')
  }
}
