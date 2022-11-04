import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
archievelist:any;
  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this.getallarchievenote();
  }
getallarchievenote(){
  this.note.getallnote().subscribe((response:any)=>{
  console.log(response)
  this.archievelist=response.filter((a:any)=>{
  return a.archieve===true && a.trash===false

  })
  console.log(this.archievelist);  
})

}
}
