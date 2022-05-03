import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styles:[ `
    .divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
.h-custom {
height: calc(100% - 73px);
}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}
    `
  ]
})
export class LoginComponent   {

  datos = {
    username:"",
    password:""
  }

  get iniciando(){
    return this.oath.iniciando;
  }
  ingresarSinLogin(){
    this.oath.login(this.datos).subscribe((elment)=>{
      console.log();
      if(elment.token){ 
        this.router.navigate(['./home']);
      }
      this.oath.iniciando =false;
    });
  }
  constructor( private oath : AuthService, private router: Router,) { 
    let data = this.oath.verificaAutenticacion();
    if(data){
      this.router.navigate(['./home']); 
    }
  } 

}
