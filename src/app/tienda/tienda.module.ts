import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { ProductosComponent } from './productos/productos.component'; 



@NgModule({
  declarations: [
    ProductosComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ProductosComponent
  ]
})
export class TiendaModule { }
