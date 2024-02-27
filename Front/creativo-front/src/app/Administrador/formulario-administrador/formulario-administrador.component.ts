import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Administrador } from 'src/app/interfaces/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-administrador',
  templateUrl: './formulario-administrador.component.html',
  styleUrls: ['./formulario-administrador.component.css']
})
export class FormularioAdministradorComponent {
  objeto:Administrador = new Administrador();
  constructor(private service:AdministradorService, private route:Router, private rou:ActivatedRoute){
  }
  confirm = '';

  guardar() {
    Swal.fire({
      title: "¿Quieres añadir este Administrador?",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar!"
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.confirm === this.objeto.Password) {
          this.service.add(this.objeto).subscribe({
            next:(data) =>{
              this.service.successMessage("Guardado Exitosamente", "/administradores");
            }, error:(err) =>{
              console.log(err)
              this.service.errorMessage(err.error.Message)
            }
          })
        } else {
          this.service.errorMessage("Las contraseñas no coinciden")
        }
      }
    });
  }


  

  redirigir(url:string) {
    Swal.fire({
      title: "¿Quieres dejar de editar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Salir!"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = url;
      }
    });
  }

}
