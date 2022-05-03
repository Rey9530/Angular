import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [
    IndexComponent,
    ProductosComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TiendaModule { }
