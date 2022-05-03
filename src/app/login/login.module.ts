import { NgModule } from '@angular/core'; 
import { LoginComponent } from './login/login.component'; 
import {  Routes } from '@angular/router'; 
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const rutas : Routes= [
  {
    path:'',
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent, 
  },  
  {
    path:'**',
    redirectTo:''
  },
]



@NgModule({
  declarations: [ 
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule, 
  ] 
})
export class LogiModule { }

 
