import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
token:any;
  constructor(private http:HttpService) { 
    this.token=localStorage.getItem('token')
  }
  addnote(data:any){    
    console.log(data,this.token);
    
    
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
   return this.http.postservice('https://localhost:44391/api/Notes/Create',data,true,header)
}
getallnote(){    
  console.log(this.token);
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
 return this.http.getservice('https://localhost:44391/api/Notes/GetAllNotes',true,header)
}
}