import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }
  register(data:any){
let header={
  Headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
return this.http.postservice('https://localhost:44391/api/User/Register',data,false,header)
  }
  login(data:any){
    let header={
      Headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
  }
  return this.http.postservice('https://localhost:44391/api/User/Login',data,false,header)
}
forgotpassword(data:any){
  let header={
    Headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
}
return this.http.postservice('https://localhost:44391/api/User/ForgotPassword',data,false,header)
}
}
