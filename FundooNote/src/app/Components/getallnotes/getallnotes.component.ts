import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';


@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
 notelist:any;

  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this.getallnotes();
  }
  getallnotes(){ 
    this.note.getallnote().subscribe((response:any)=>
   console.log(this.notelist= response)

    )
    
  }

}
