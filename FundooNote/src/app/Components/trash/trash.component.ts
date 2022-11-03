import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashlist: any;

  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this.getalltrashnote()
  }
  getalltrashnote(){
    this.note.getallnote().subscribe((response:any)=>{
    console.log(response)
    this.trashlist=response.filter((a:any)=>{
    return a.trash===true
  
    })
    console.log(this.trashlist);  
  })
  }
}
