import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BienvenidoComponent } from './welcome/bienvenido/bienvenido.component';
import { CserviciosComponent } from './servicios/cservicios/cservicios.component';
import { CloginComponent } from './login/clogin/clogin.component';
import { RouterModule, Routes } from '@angular/router';
import { CprofesionalesComponent } from './profesionales/cprofesionales/cprofesionales.component';
import { TurnosComponent } from './turnos/turnos/turnos.component';
import { FijosModule } from './fijos/fijos.module';

const rutas : Routes = [
  {path: '', component: BienvenidoComponent
  },
  {path: 'servicios', component: CserviciosComponent
  },
  {path: 'acceso', component: CloginComponent
  },
  {path: 'profesionales', component: CprofesionalesComponent
  },
  {path: 'turnos', component: TurnosComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    CserviciosComponent,
    CloginComponent,
    CprofesionalesComponent,
    TurnosComponent
  ],
  imports: [
    BrowserModule,
    FijosModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
