import { Component } from '@angular/core';
import { Emprendimiento } from 'src/app/interfaces/emprendimiento';
import { EmprendimientoService } from 'src/app/services/emprendimiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-solicitudes',
  templateUrl: './gestion-solicitudes.component.html',
  styleUrl: './gestion-solicitudes.component.scss'
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
    Swal.fire({
      title: "¿Quieres Aceptar esta solicitud?",
      text: "No lo vas a poder revertir!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.objeto = obj;
        this.objeto.State = "Aceptada";
        this.gestionarSolicitud();
      }
    });
  }
  rechazarSolicitud(obj:Emprendimiento){
    Swal.fire({
      title: "¿Quieres Rechazar esta solicitud?",
      text: "No lo vas a poder revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Rechazar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.objeto = obj;
        this.objeto.State = "Rechazada"
        this.gestionarSolicitud();
      }
    });




    
  }

  gestionarSolicitud(){
    this.service.update(this.objeto.IdEntrepreneurship, this.objeto).subscribe({
      next:(data) => {
        Swal.fire({
          title: this.objeto.State + "!",
          text: "Solicitud Gestionada exitosamente",
          icon: "success",
          didClose: () => {
            window.location.reload();
          }
        });
      }, 
      error:(err) => {
        console.log(err)
      }
    })
  }
}
