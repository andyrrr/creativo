import { Component } from '@angular/core';
import { Emprendimiento } from 'src/app/interfaces/emprendimiento';
import { EmprendimientoService } from 'src/app/services/emprendimiento.service';

@Component({
  selector: 'app-gestion-solicitudes',
  templateUrl: './gestion-solicitudes.component.html',
  styleUrls: ['./gestion-solicitudes.component.css']
})
export class GestionSolicitudesComponent {

  solicitudes:Emprendimiento[] = [];
  objeto: Emprendimiento = new Emprendimiento();

  constructor(private service: EmprendimientoService){
    this.service.getSelectedList("Solicitudes").subscribe({
      next:(data) => {
        this.solicitudes = data;
        console.log(this.solicitudes)
      }, 
      error: (err) =>{
        console.log(err)
      }
    })
  }


  redirigir(url:string) {
    window.location.href = url;
  }

  aceptarSolicitud(obj:Emprendimiento){
    this.objeto = obj;
    this.objeto.Estado = "Aceptada";
    this.gestionarSolicitud();
  }
  rechazarSolicitud(obj:Emprendimiento){
    this.objeto = obj;
    this.objeto.Estado = "Rechazada"
    this.gestionarSolicitud();
  }

  gestionarSolicitud(){

    this.service.update(this.objeto.IdEmprendimiento, this.objeto).subscribe({
      next:(data) => {
        window.location.reload();
      }, 
      error:(err) => {
        console.log(err)
      }
    })
  }
}
