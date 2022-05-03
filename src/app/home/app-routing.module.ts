import {  NgModule } from '@angular/core'; 
import { Routes,RouterModule  } from '@angular/router';
import { CarritoComponent } from '../tienda/carrito/carrito.component'; 
import { ProductosComponent } from '../tienda/productos/productos.component';
import { VerUsuariosComponent } from '../usuarios/ver-usuarios/ver-usuarios.component';

const rutas : Routes= [
  {
    path: '',
    component: VerUsuariosComponent,
    children: [
      { path:'', component: VerUsuariosComponent, },
      { path:'usuarios', component: VerUsuariosComponent, },
      { path:'tienda/productos',component: ProductosComponent, },
      { path:'tienda/carrito',component: CarritoComponent, },
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
