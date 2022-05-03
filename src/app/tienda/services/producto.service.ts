import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { variablesTienda } from 'src/app/shared/variables';

interface Productos {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
  rating:      Rating;
}

interface Rating {
  rate:  number;
  count: number;
} 
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private servicioUrl = variablesTienda.urlApi; 

  private _cotegorias:string[] = [];
  private _productos:Productos[] =[];
  public carrito:Productos[] =[];
  public cargando= false;
  
  get categorias(){ 
    return [...this._cotegorias];
  }
  
  get productos(){  
    return [...this._productos];
  }
  get carrito_encarrito(){  
    return [...this.carrito];
  }

  
  cargarCategorias (){
    this.http.get<string[]>(`${ this.servicioUrl }products/categories/`)
    .subscribe((resp)=>{ 
      console.log('ni idea',resp)
      resp.forEach(element => {
        this._cotegorias.push(element)
      });
    });
  }
  
  obtenerProductos (categoria:string){
    this.cargando = true;
    this.http.get<Productos[]>(`${ this.servicioUrl }products/category/`+categoria)
    .subscribe((resp)=>{ 
      this.cargando = false;
      this._productos =resp;
    });
  }
  
  agregar_carrito (id:number){ 
    this._productos.forEach(element => {
      if(element.id==id){
        this.carrito.push(element);
      }
    });
  }
  
  eliminar_carrito (id:number){ 
    let data =  this.carrito;
    this.carrito = [];
    data.forEach(element => {
      if(element.id!==id){
        this.carrito.push(element);
      }
    });
  }


  constructor(private http: HttpClient) { 
    this.cargarCategorias(); 
  }
}
