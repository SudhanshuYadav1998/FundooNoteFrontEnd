import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  id: any;

  colorsArr = [{ Colorcode: "pink" },
  { Colorcode: "yellow" },
  { Colorcode: "orange" },
  { Colorcode: "rgb(255,99,71)" },
  { Colorcode: "rgb(152,251,152)" },
  { Colorcode: "Teal" },
  { Colorcode: "rgb(106,90,205)" },
  { Colorcode: "rgb(240,230,140)" },
  { Colorcode: "rgb(238,130,238)" },
  { Colorcode: "rgb(255,160,122)"}
  ];

  constructor(private note: NotesService) { }

  ngOnInit(): void {

  }
  Archivenote() {

    let reqdata = {

      archive: true,  
    }
    this.note.archievenote(reqdata, this.notecard.noteId).subscribe((response: any) => {
      console.log("Note is archived");

      console.log(response);

    })
    window.location.reload();

  }

  Unarchive() {

    let reqdata = {

      archive: false,
    }
    this.note.unarchievenote(reqdata, this.notecard.noteId).subscribe((response: any) => {
      console.log("Note is Unarchived");

      console.log(response);

    })
    window.location.reload();

  }
  Trashnote() {

    let reqdata = {

      trash: true,  
    }
    this.note.trashnote(reqdata, this.notecard.noteId).subscribe((response: any) => {
      console.log("Note is trashed");

      console.log(response);

    })
    window.location.reload();


  }
  removeTrashnote() {

    let reqdata = {

      trash: false,  
    }
    this.note.movefromtrashnote(reqdata, this.notecard.noteId).subscribe((response: any) => {
      console.log("Note is removed from trash");

      console.log(response);

    })
    window.location.reload();


  }
  deletenotes() {
    let reqdata = {

      trash: true,  // it is coming from backend api
    }
    this.note.deletenote(reqdata, this.notecard.noteId).subscribe((response: any) => {
      console.log("Note is deleted");

      console.log(this.notecard = response);

    })
    window.location.reload();


  }
  getNoteColor(color :any){
   
    this.note.getColorNote(this.notecard.noteId,color).subscribe((response:any)=>{
      console.log(response);
    })
  }
}


