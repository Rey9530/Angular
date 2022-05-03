import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { variablesTienda } from 'src/app/shared/variables';
 
export interface Auth {
  username:   string;
  password: string;
} 

export interface Token {
  token:   string; 
} 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = variablesTienda.urlApi;
  private _auth:Token | undefined ;
  public iniciando=  false;
  get auth(): Token {
    return { ...this._auth! }
  }

  constructor( private http: HttpClient ) { }


  verificaAutenticacion(): boolean {
    let data = localStorage.getItem('token'); 
    if ( !localStorage.getItem('token') ) {
      return false;
    }else{
      return true;
    } 

  }
 
  login(usuario:Auth) {
    this.iniciando = true;
    return this.http.post<Token>(`${ this.baseUrl }auth/login`,usuario)
    .pipe(
      tap( auth => this._auth = auth ),
      tap( auth => localStorage.setItem('token', auth.token ) ),
    )
    // .subscribe( (resp )=>{ 
    //   if(resp.token){
    //     localStorage.setItem('token', resp.token )
    //   }

    // this.iniciando = false;
    // } )
  }

  logout() {
    this._auth = undefined;
  }

}
