import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { GetemailComponent } from './Components/getemail/getemail.component';
import { RecoverpasswordComponent } from './Components/recoverpassword/recoverpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TrashComponent } from './Components/trash/trash.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { ArchieveComponent } from './Components/archieve/archieve.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { DisplayComponent } from './Components/display/display.component';
import { IconsComponent } from './Components/icons/icons.component';
import { AuthenticationGuard } from './authentication.guard';



const routes: Routes = [ 
  { path:'', redirectTo:"/signin", pathMatch:'full' },

 { path:'register',component:RegisterComponent},
 { path:'signin',component:LoginComponent},
 { path:'forgotemail',component:GetemailComponent},
 { path:'resetpassword',component:RecoverpasswordComponent},
 {path:'create',component:CreatenoteComponent},
 {path:'display',component:DisplayComponent},
 {path:'icons',component:IconsComponent},
 {path:'dashboard',
 component:DashboardComponent,canActivate:[AuthenticationGuard],
 
children:[
  { path:'notes',component:GetallnotesComponent},
  { path:'trash',component:TrashComponent},
  { path:'archieve',component:ArchieveComponent}
]
}
  
   ]

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }