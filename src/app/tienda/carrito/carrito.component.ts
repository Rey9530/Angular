import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: [
  ]
})
export class CarritoComponent   {

  get productoscarrito(){
    return this.serpro.carrito_encarrito;
  }
  eliminar_carrito(id:number){
    return this.serpro.eliminar_carrito(id); 
  }
  constructor(private serpro: ProductoService) { }
 
}
