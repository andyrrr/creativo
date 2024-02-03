import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestionAdministradoresComponent } from './gestion-administradores/gestion-administradores.component';
import { GestionSolicitudesComponent } from './gestion-solicitudes/gestion-solicitudes.component';
import { RegistroSolicitudComponent } from './registro-solicitud/registro-solicitud.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionAdministradoresComponent,
    GestionSolicitudesComponent,
    RegistroSolicitudComponent,
    PreguntasFrecuentesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
