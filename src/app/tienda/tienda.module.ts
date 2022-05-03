import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { ProductosComponent } from './productos/productos.component'; 
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [
    ProductosComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ProductosComponent,
    CarritoComponent
  ]
})
export class TiendaModule { }
