import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styles: [
  ]
})
export class ListadoProductoComponent  {
  
  constructor(private productos: ProductosService) { }
  get productoss(){  
    return this.productos.productos;
  }

}
