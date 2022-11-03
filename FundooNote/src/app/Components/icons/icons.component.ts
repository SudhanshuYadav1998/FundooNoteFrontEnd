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
    console.log(this.notecard);
     
   
    this.title=this.notecard.title,
    this.description=this.notecard.description
  }
  Archivenote(){

    let reqdata={
      
       noteId: this.notecard.id, //this notecard is coming from display.html - <app-icons & this noteIdlist is taken as a assumption by ourselves for taking id of notes
      archived:true,  // it is coming from backend api
    }
    this.note.archievenote(reqdata,this.notecard.noteId).subscribe((response:any) =>{
      console.log("Note is archived");

      console.log(response);
      
    })
  }
  Unarchive(){
     
    let reqdata={
      
      noteId: this.notecard.id, //this notecard is coming from display.html - <app-icons & this noteIdlist is taken as a assumption by ourselves for taking id of notes
      archived:false,  // it is coming from backend api
    }
    this.note.archievenote(reqdata,this.notecard.noteId).subscribe((response:any) =>{
      console.log("Note is Unarchived");

      console.log(response);
      
    })
    window.location.reload();
  }

  

}
