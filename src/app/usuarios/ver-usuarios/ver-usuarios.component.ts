import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent   {


  get usuarios(){
    return  this.usuarioService.usuarios;
  }

  
  get guardando(){
    return  this.usuarioService.guardando;
  }

  constructor( private usuarioService: UsuarioService ) {  }
 


}
