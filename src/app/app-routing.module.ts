import { Component, NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/guards/auth.guard';
import { CarritoComponent } from './tienda/carrito/carrito.component'; 
import { ProductosComponent } from './tienda/productos/productos.component';
import { VerUsuariosComponent } from './usuarios/ver-usuarios/ver-usuarios.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./login/login.module').then( m => m.LogiModule ),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule ),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule ),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  },
  // {
  //   path: '404',
  //   component: ErrorPageComponent
  // },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
]
// numero
@NgModule({ 
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
