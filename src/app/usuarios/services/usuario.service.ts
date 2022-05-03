import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private servicioUrl = 'https://fakestoreapi.com/';
  private _guardando = false;
  private _usuarios:Usuario[] =[] ;

  get guardando(){
    return this._guardando;
  }

  get usuarios(){
    console.log(this._usuarios);
    return [...this._usuarios];
  }

  cargarUsuarios (){
    this.http.get<Usuario[]>(`${ this.servicioUrl }users/`)
    .subscribe((resp)=>{ 
      this._usuarios = resp;
    });
  }

  
  guardarUsuario (uduario:Usuario){ 
    this._guardando = true;
    return this.http.post<Usuario>(`${ this.servicioUrl }users/`,uduario)
    .subscribe((resp)=>{ 
      uduario.__v=0;
      uduario.id=this._usuarios.length+1; 
      this._usuarios.push(uduario);
      this._guardando = false;
      return resp;
    });
  }

  constructor( private http: HttpClient ) { 
    this.cargarUsuarios();
  }


}
