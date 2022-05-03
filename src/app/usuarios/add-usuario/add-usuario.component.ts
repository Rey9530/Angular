import { Component, ElementRef, ViewChild } from '@angular/core'; 
import { UsuarioService } from '../services/usuario.service';

 

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styles: [
  ]
}) 

export class AddUsuarioComponent   {

  @ViewChild('closebutton') closebutton: ElementRef | undefined; 

  
  get guardando(){
    return this.usuarioService.guardando;
  }
  latitude:string ="";
  longitude:string =""; 

  datosUserEmtyp = { email:"",username:"",password:"",name : { firstname:"",lastname:""},address:{city:"",street:"",number:0,zipcode:"",geolocation:{lat: "0",long: "0",}},phone:""}
  datosUser      = { email:"",username:"",password:"",name : { firstname:"",lastname:""},address:{city:"",street:"",number:0,zipcode:"",geolocation:{lat: "0",long: "0",}},phone:""}

  guardar_usuario(){ 
    this.datosUser.address!.geolocation!.lat =this.latitude;
    this.datosUser.address!.geolocation!.long =this.longitude; 
 
    this.usuarioService.guardarUsuario(this.datosUser); 
    this.datosUser = this.datosUserEmtyp;
    this.closebutton!.nativeElement.click();  
  }
 
  getPosition(): Promise<any> {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resp => { 
                resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
            },
            err => {
                reject(err);
          });
      });
  }
  getLocation() {
    this.getPosition().then(pos => {
        this.latitude = pos.lat;
        this.longitude = pos.lng;
        console.log(this.latitude,'-',this.longitude)
    });
  }

  
  constructor( private usuarioService: UsuarioService ) { 
    this.getLocation();
  }

}
