import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';



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
    VerUsuariosComponent,
    AddUsuarioComponent
  ]
})
export class UsuariosModule { }
