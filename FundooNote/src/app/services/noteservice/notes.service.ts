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
updatenote(data:any,id:any){

  console.log(data,this.token);
  
  
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
 return this.http.putservice(`https://localhost:44391/api/Notes/Update?noteId=${id}`,data,true,header)
}
archievenote(data:any,id:any){

  console.log(data,this.token);
  
  
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
 return this.http.putservice(`https://localhost:44391/api/Notes/Archieve?noteId=${id}`,data,true,header)
}
trashnote(data:any,id:any){

  console.log(data,this.token);
  
  
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
 return this.http.putservice(`https://localhost:44391/api/Notes/Trash?noteId=${id}`,data,true,header)
}
unarchievenote(data:any,id:any){

  console.log(data,this.token);
  
  
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
 return this.http.putservice(`https://localhost:44391/api/Notes/Archieve?noteId=${id}`,data,true,header)
}
deletenote(data:any,id:any){

  console.log(data,this.token);
  
  
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
 return this.http.deleteservice (`https://localhost:44391/api/Notes/Delete?notesid=${id}`,data,true,header)
}
}
