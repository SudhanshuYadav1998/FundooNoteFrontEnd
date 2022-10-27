import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })   
  }

  onSubmit() {
    if(this.signinForm.valid){
      console.log("sign in works");
      let payload={
        email:this.signinForm.value.email,
        password:this.signinForm.value.password
      }
      this.user.login(payload).subscribe((response:any)=>{
        console.log(response);
        
      })
      
    }
    else{
      console.log("not works");
      
    }
  }

}