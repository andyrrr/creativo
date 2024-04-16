import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SassLandingOneComponent } from './components/pages/sass-landing-one/sass-landing-one.component';
import { AppLandingComponent } from './components/pages/app-landing/app-landing.component';
import { SassLandingTwoComponent } from './components/pages/sass-landing-two/sass-landing-two.component';
import { AgencyLandingOneComponent } from './components/pages/agency-landing-one/agency-landing-one.component';
import { AgencyLandingTwoComponent } from './components/pages/agency-landing-two/agency-landing-two.component';
import { PortfolioLandingComponent } from './components/pages/portfolio-landing/portfolio-landing.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { IngresarComponent } from './components/pages/ingresar/ingresar.component';
import { DashboardAdminComponent } from './components/pages/dashboard-admin/dashboard-admin.component';
import { DashboardClienteComponent } from './components/pages/dashboard-cliente/dashboard-cliente.component';
import { DashboardEmprendimientoComponent } from './components/pages/dashboard-emprendimiento/dashboard-emprendimiento.component';
import { AgregarAdministradorComponent } from './components/pages/dashboard-admin/agregar-administrador/agregar-administrador.component';
import { AgregarPreguntaComponent } from './components/pages/dashboard-admin/agregar-pregunta/agregar-pregunta.component';
import { AgregarEmprendimientoComponent } from './components/pages/dashboard-cliente/agregar-emprendimiento/agregar-emprendimiento.component';
import { NuevoRegistroComponent } from './components/pages/ingresar/nuevo-registro/nuevo-registro.component';
import { DashboardRepartidorComponent } from './components/pages/dashboard-repartidor/dashboard-repartidor.component';
import { AgregarTallerComponent } from './components/pages/dashboard-emprendimiento/agregar-taller/agregar-taller.component';

const routes: Routes = [
    {path: '', component:InicioComponent},
    {path: 'sass-landing-one', component: SassLandingOneComponent},
    {path: 'sass-landing-two', component: SassLandingTwoComponent},
    {path: 'app-landing', component: AppLandingComponent},
    {path: 'agency-landing-one', component: AgencyLandingOneComponent},
    {path: 'agency-landing-two', component: AgencyLandingTwoComponent},
    {path: 'portfolio-landing', component: PortfolioLandingComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'ingresar', component:IngresarComponent},
    {path: 'dashboard-admin', component:DashboardAdminComponent},
    {path: 'dashboard-cliente', component:DashboardClienteComponent},
    {path: 'dashboard-emprendimiento', component:DashboardEmprendimientoComponent},
    {path: 'dashboard-repartidor', component:DashboardRepartidorComponent},
    {path: 'agregar-administrador', component:AgregarAdministradorComponent}, 
    {path: "actualizar-pregunta/:id", component:AgregarPreguntaComponent},
    {path: "nueva-pregunta", component:AgregarPreguntaComponent},
    {path: "nuevo-emprendimiento", component:AgregarEmprendimientoComponent},
    {path: "registrarse", component:NuevoRegistroComponent},
    {path: "nuevo-taller", component:AgregarTallerComponent},
    {path: "actualizar-taller/:id", component:AgregarTallerComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }