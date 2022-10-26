import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-getemail',
  templateUrl: './getemail.component.html',
  styleUrls: ['./getemail.component.scss']
})
export class GetemailComponent implements OnInit {
  forgotemailForm!: FormGroup;
  
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgotemailForm =this.formBuilder.group({
      phoneOrEmail:['',[Validators.required]]
    })
  }
  onSubmit() {
  }

}