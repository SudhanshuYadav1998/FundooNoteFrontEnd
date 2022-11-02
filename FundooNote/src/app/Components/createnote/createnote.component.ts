import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  createForm!:FormGroup;
  show=false;

  constructor(private formBuilder: FormBuilder,private note:NotesService) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', Validators.required],
    })   
  }
  isshow(){
    this.show=true;
  }
  close(){
    this.show=false;
    if(this.createForm.valid){
      console.log("add note in works");
      let payload={
        title:this.createForm.value.title,
        description:this.createForm.value.description
      }
      this.note.addnote(payload).subscribe((response:any)=>{
        console.log(response)
      }
     
      
      )
    }
    else{
      console.log("something wrong");
      
    }
    
  }

}
