import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import { UsuariosModule } from '../usuarios/usuarios.module';
// import { TiendaModule } from '../tienda/tienda.module';
// import { SharedModule } from '../shared/shared.module';
import { VerUsuariosComponent } from '../usuarios/ver-usuarios/ver-usuarios.component';
import { AddUsuarioComponent } from '../usuarios/add-usuario/add-usuario.component';
import { ProductosComponent } from '../tienda/productos/productos.component';
import { CarritoComponent } from '../tienda/carrito/carrito.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [ 
    VerUsuariosComponent,
    ProductosComponent,
    CarritoComponent,
    AddUsuarioComponent,
    SidebarComponent,
    IndexComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    AppRoutingModule,
  ],
  providers:[HttpClient]
})
export class HomeModule { }
