import {  NgModule } from '@angular/core'; 
import { Routes,RouterModule  } from '@angular/router';
import { CarritoComponent } from '../tienda/carrito/carrito.component'; 
import { ProductosComponent } from '../tienda/productos/productos.component';
import { VerUsuariosComponent } from '../usuarios/ver-usuarios/ver-usuarios.component';
import { IndexComponent } from './index/index.component';

const rutas : Routes= [
  {
    path: '',
    component: IndexComponent,
    children: [ 
      { path:'usuarios', component: VerUsuariosComponent },
      { path:'tienda/productos',component: ProductosComponent },
      { path:'tienda/carrito',component: CarritoComponent },
      { path:'**', redirectTo: 'usuarios' }
    ]
  }
]

@NgModule({ 
  imports: [ 
    RouterModule.forChild(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
