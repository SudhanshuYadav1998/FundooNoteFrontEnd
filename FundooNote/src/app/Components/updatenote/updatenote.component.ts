import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/noteservice/notes.service';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  
  title:any;
  description:any;
  id:any;

  constructor(
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private note:NotesService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
     
   
    this.title=this.data.title,
    this.description=this.data.description
  }
  Updatenotes(){

    let updatenoteobject={
      
      title:this.title,
      description:this.description,
    }
    this.note.updatenote(updatenoteobject,this.data.noteId).subscribe((response:any) => {
      console.log(response)
    })
    this.dialogRef.close()  
    
  
  }
  

}
