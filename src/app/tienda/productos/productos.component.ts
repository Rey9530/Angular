import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service'; 

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent  {


  get categorias (){
    return this.serpro.categorias;
  }

  get cargando (){
    return this.serpro.cargando;
  }
  get productos (){
    console.log(this.serpro.productos)
    return this.serpro.productos;
  }

  cargarCategorias(category:string){ 
    this.serpro.obtenerProductos(category)
  }

  agregar_carrito(category:number){ 
    this.serpro.agregar_carrito(category)
  }

  constructor(private serpro: ProductoService) { }
 

}
