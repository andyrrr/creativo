import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EmprendimientoAdmin } from 'src/app/interfaces/emprendimiento';
import { EmprendimientoAdminService } from 'src/app/services/emprendimiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-emprendimientos',
  templateUrl: './cliente-emprendimientos.component.html',
  styleUrls: ['./cliente-emprendimientos.component.css']
})
export class ClienteEmprendimientosComponent {

  emprendimientos:EmprendimientoAdmin[] = [];
  admin:EmprendimientoAdmin = new EmprendimientoAdmin;

  constructor(private service: EmprendimientoAdminService, private cookieService: CookieService){
    this.service.getSelectedList("byClient" + "/" + this.cookieService.get("cookieCLIENTE")).subscribe({
      next:(data) => {
        this.emprendimientos = data;
        console.log(this.emprendimientos)
      }, 
      error: (err) =>{
        console.log(err)
      }
    })
  }


  redirigir(url:string) {
    window.location.href = url;
  }

  ingresarEmprendimeinto(user:string){
    Swal.fire({
      title: "¿Quieres cambiar a este perfil de emprendimiento?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cambiar de cuenta!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.cookieService.set('cookieEMPRENDIMIENTO', user);
        this.service.successMessage("¡Bienvenido a tu cuenta de emprendedor!", "/ingresar")
      }
    });
  }

  aceptarSolicitud(user:string){
    Swal.fire({
      title: "¿Quieres aceptar la solicitud de administración para este emprendimiento?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.admin.IdClient = this.cookieService.get("cookieCLIENTE");
        this.admin.IdEntrepreneurship = user;
        this.admin.state = "Aceptado"
        console.log(this.admin)
        this.service.update(this.admin.IdEntrepreneurship, this.admin).subscribe({
          next:(data) =>{
            this.service.successMessage("Solucitud Aceptada", "/cliente-emprendimientos")
          }, error:(err) => {
            this.service.errorMessage(err.error.Message);
          }
        })
      }
    });
  }

  rechazarSolicitud(user:string){
    Swal.fire({
      title: "¿Quieres recahzar la solicitud de administración para este emprendimiento?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Rechazar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.admin.IdClient = this.cookieService.get("cookieCLIENTE");
        this.admin.IdEntrepreneurship = user;
        this.admin.state = "Rechazado"
        this.service.update(this.admin.IdEntrepreneurship, this.admin).subscribe({
          next:(data) =>{
            this.service.successMessage("Solucitud Rechazada", "/cliente-emprendimientos")
          }, error:(err) => {
            this.service.errorMessage(err.error.Message);
          }
        })
      }
    });
  }

}
