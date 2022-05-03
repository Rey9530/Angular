import { Component, NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './tienda/carrito/carrito.component';
import { IndexComponent } from './tienda/index/index.component';
import { ProductosComponent } from './tienda/productos/productos.component';
import { VerUsuariosComponent } from './usuarios/ver-usuarios/ver-usuarios.component';

const rutas : Routes= [
    {
      path:'',
      component: VerUsuariosComponent,
      pathMatch:'full'
    },
    {
      path:'usuarios',
      component: VerUsuariosComponent, 
    },
    {
      path:'tienda/productos',
      component: ProductosComponent, 
    },
    {
      path:'tienda/carrito',
      component: CarritoComponent, 
    },
    {
      path:'',
      component: VerUsuariosComponent, 
    },
    {
      path:'**',
      redirectTo:''
    },
]

@NgModule({ 
  imports: [ 
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
