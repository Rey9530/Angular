import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/tienda/services/producto.service';

@Component({
  selector: 'app-sedebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class SidebarComponent  {

  get countCarrito(){
    return this.serpro.carrito.length;
  }
  constructor(private serpro: ProductoService) { }
 

}
