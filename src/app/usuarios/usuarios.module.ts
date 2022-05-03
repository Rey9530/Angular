import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VerUsuariosComponent,
    AddUsuarioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    VerUsuariosComponent
  ]
})
export class UsuariosModule { }
