import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GestionAdministradoresComponent } from './Administrador/gestion-administradores/gestion-administradores.component';
import { GestionSolicitudesComponent } from './Administrador/gestion-solicitudes/gestion-solicitudes.component';
import { RegistroSolicitudComponent } from './Emprendimiento/registro-solicitud/registro-solicitud.component';
import { PreguntasFrecuentesComponent } from './General/preguntas-frecuentes/preguntas-frecuentes.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GestionAdministradoresComponent,
    GestionSolicitudesComponent,
    RegistroSolicitudComponent,
    PreguntasFrecuentesComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([
      {path: "", component:PreguntasFrecuentesComponent},
      {path: "preguntas", component:PreguntasFrecuentesComponent},
      {path: "solicitudes", component:GestionSolicitudesComponent},
      {path: "administradores", component:GestionAdministradoresComponent},
      {path: "solicitud", component:RegistroSolicitudComponent},
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
