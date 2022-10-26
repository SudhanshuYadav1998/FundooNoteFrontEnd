import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { GetemailComponent } from './Components/getemail/getemail.component';
import { RecoverpasswordComponent } from './Components/recoverpassword/recoverpassword.component';



const routes: Routes = [ 
  { path:'', redirectTo:"/register", pathMatch:'full' },

 { path:'register',component:RegisterComponent},
 { path:'signin',component:LoginComponent},
 { path:'forgotemail',component:GetemailComponent},
 { path:'resetpassword',component:RecoverpasswordComponent},
 
    
   
   ]

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }