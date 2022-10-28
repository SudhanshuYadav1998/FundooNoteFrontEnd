import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
@Component({
  selector: 'app-getemail',
  templateUrl: './getemail.component.html',
  styleUrls: ['./getemail.component.scss']
})
export class GetemailComponent implements OnInit {  
  forgotemailForm!: FormGroup;
  
  constructor( private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.forgotemailForm =this.formBuilder.group({
      phoneOrEmail:['',[Validators.required]]
    })
  }
  onSubmit() {
if(this.forgotemailForm.valid)
{
  console.log("Forgot Password works");
  let payload={
    email:this.forgotemailForm.value.phoneOrEmail
  }
  this.user.forgotpassword(payload).subscribe((response:any)=>{
    console.log(response);
    
  })
}
else{
  console.log("Error Occured");
  
}
  }

}