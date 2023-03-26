import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css']
})
export class CloginComponent {
  guardado = false;

  alumno = {
    nombre: '',
    clave: ''
  };

  guardar(){
    this.guardado = true;

  }

}
