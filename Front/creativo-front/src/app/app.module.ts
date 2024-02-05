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
import { InicioComponent } from './General/inicio/inicio.component';
import { GestionPreguntasComponent } from './Administrador/gestion-preguntas/gestion-preguntas.component';
import { NuevaPreguntaComponent } from './Administrador/nueva-pregunta/nueva-pregunta.component';


@NgModule({
  declarations: [
    AppComponent,
    GestionAdministradoresComponent,
    GestionSolicitudesComponent,
    RegistroSolicitudComponent,
    PreguntasFrecuentesComponent,
    InicioComponent,
    GestionPreguntasComponent,
    NuevaPreguntaComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([
      {path: "", component:InicioComponent},
      {path: "inicio", component:InicioComponent},
      {path: "preguntas", component:PreguntasFrecuentesComponent},
      {path: "solicitudes", component:GestionSolicitudesComponent},
      {path: "administradores", component:GestionAdministradoresComponent},
      {path: "registrarse", component:RegistroSolicitudComponent},
      {path: "gestion-preguntas", component:GestionPreguntasComponent},
      {path: "nueva-pregunta", component:NuevaPreguntaComponent},
      {path: "actualizar-pregunta/:id", component:NuevaPreguntaComponent}
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
