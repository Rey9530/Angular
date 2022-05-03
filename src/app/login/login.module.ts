import { NgModule } from '@angular/core'; 
import { LoginComponent } from './login/login.component'; 
import { RouterModule, Routes } from '@angular/router';
import { VerUsuariosComponent } from '../usuarios/ver-usuarios/ver-usuarios.component';
import { ProductosComponent } from '../tienda/productos/productos.component';
import { CarritoComponent } from '../tienda/carrito/carrito.component';

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
  exports:[ 
    LoginComponent
  ]
})
export class LogiModule { }
