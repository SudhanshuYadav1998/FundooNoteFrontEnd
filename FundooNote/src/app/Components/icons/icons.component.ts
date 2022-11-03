import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notecard: any;
  title: any;
  description: any;
  id:any;

  constructor(private note:NotesService) { }

  ngOnInit(): void {
 
  }
  Archivenote(){

    let reqdata={
      
      archive:true,  // it is coming from backend api
    }
    this.note.archievenote(reqdata,this.notecard.noteId).subscribe((response:any) =>{
      console.log("Note is archived");

      console.log(response);
      
    })
  }
  
  Unarchive(){
     
    let reqdata={
      
      archive:false,  
    }
    this.note.unarchievenote (reqdata,this.notecard.noteId).subscribe((response:any) =>{
      console.log("Note is Unarchived");

      console.log(response);
      
    })
  }
  Trashnote(){

    let reqdata={
      
      trash:true,  // it is coming from backend api
    }
    this.note.trashnote(reqdata,this.notecard.noteId).subscribe((response:any) =>{
      console.log("Note is trashed");

      console.log(response);
      
    })
    
  }
  removeTrashnote(){

    let reqdata={
      
      trash:false,  // it is coming from backend api
    }
    this.note.movefromtrashnote(reqdata,this.notecard.noteId).subscribe((response:any) =>{
      console.log("Note is removed from trash");

      console.log(response);
      
    })
    
  }
  deletenotes(){
    let reqdata={
      
      trash:true,  // it is coming from backend api
    }
    this.note.deletenote(reqdata,this.notecard.noteId).subscribe((response:any) =>{
      console.log("Note is deleted");

      console.log(this.notecard=response);
      
    })
    
  }
}
