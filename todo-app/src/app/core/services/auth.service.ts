import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


const serverUrl = 'https://joldibaev.uz/api/'
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  constructor(private http:HttpClient) {
  }

  ngOnInit() {
  }

  login(body:{login:string, password:string}):Observable<{token:string}>{
    return (this.http.post(`${serverUrl}auth/token/login`, body) as Observable<{token:string}>)
  }

  logout(){

  }


}
