import { Component } from '@angular/core';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent {
  guardado = false;

  alumno = {
    nombre: '',
    clave: ''
  };

  guardar(){
    this.guardado = true;

  }

}
