import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.scss']
})
export class RecoverpasswordComponent implements OnInit {
  forgotpasswordForm!: FormGroup;

  constructor( private formBuilder: FormBuilder , private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.forgotpasswordForm=this.formBuilder.group({
      newpassword:['',[Validators.required, Validators.minLength(6)]],  //this newpassword name in .ts file and the formcontrolname in .html file should be same
      confirmPassword:['',Validators.required]
    })
    
  }

  onSubmit() {
  }

}