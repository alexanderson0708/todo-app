import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  constructor(private http:HttpClient) {
  }

  ngOnInit() {
  }

  login(body:{email:string, password:string}):Observable<{token:string}>{
    return (this.http.post('api/auth/token/login/', body) as Observable<{token:string}>)
  }

  logout(){

  }


}
