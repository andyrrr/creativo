import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GestionAdministradoresComponent } from './Administrador/gestion-administradores/gestion-administradores.component';
import { GestionSolicitudesComponent } from './Administrador/gestion-solicitudes/gestion-solicitudes.component';
import { PreguntasFrecuentesComponent } from './General/preguntas-frecuentes/preguntas-frecuentes.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './General/inicio/inicio.component';
import { GestionPreguntasComponent } from './Administrador/gestion-preguntas/gestion-preguntas.component';
import { NuevaPreguntaComponent } from './Administrador/nueva-pregunta/nueva-pregunta.component';
import { NavBarComponent } from './General/nav-bar/nav-bar.component';
import { LoginComponent } from './General/login/login.component';
import { NuevoRegistroComponent } from './General/nuevo-registro/nuevo-registro.component';
import { FormularioEmprendimientoComponent } from './General/formulario-emprendimiento/formulario-emprendimiento.component';
import { FormularioClienteComponent } from './General/formulario-cliente/formulario-cliente.component';
import { FormularioRepartidorComponent } from './General/formulario-repartidor/formulario-repartidor.component';
import { FormularioAdministradorComponent } from './Administrador/formulario-administrador/formulario-administrador.component';
import { EmprendimientoPerfilComponent } from './Emprendimiento/emprendimiento-perfil/emprendimiento-perfil.component';
import { ClientePerfilComponent } from './Cliente/cliente-perfil/cliente-perfil.component';




@NgModule({
  declarations: [
    AppComponent,
    GestionAdministradoresComponent,
    GestionSolicitudesComponent,
    PreguntasFrecuentesComponent,
    InicioComponent,
    GestionPreguntasComponent,
    NuevaPreguntaComponent,
    LoginComponent,
    NavBarComponent,
    NuevoRegistroComponent,
    FormularioEmprendimientoComponent,
    FormularioClienteComponent,
    FormularioRepartidorComponent,
    FormularioAdministradorComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([
      {path: "", component:InicioComponent},
      {path: "inicio", component:InicioComponent},
      {path: "preguntas", component:PreguntasFrecuentesComponent},
      {path: "solicitudes", component:GestionSolicitudesComponent},
      {path: "administradores", component:GestionAdministradoresComponent},
      {path: "registrarse", component:NuevoRegistroComponent},
      {path: "nuevo-admin", component:FormularioAdministradorComponent},
      {path: "gestion-preguntas", component:GestionPreguntasComponent},
      {path: "nueva-pregunta", component:NuevaPreguntaComponent},
      {path: "actualizar-pregunta/:id", component:NuevaPreguntaComponent},
      {path: "ingresar", component:LoginComponent},
      {path: "emprendimiento-perfil", component:EmprendimientoPerfilComponent},
      {path: "cliente-perfil", component:ClientePerfilComponent}
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
