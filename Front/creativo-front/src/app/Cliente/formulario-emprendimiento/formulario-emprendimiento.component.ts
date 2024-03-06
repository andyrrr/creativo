import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Emprendimiento, EmprendimientoAdmin } from 'src/app/interfaces/emprendimiento';
import { Canton, Distrito, Province } from 'src/app/interfaces/lugares';
import { EmprendimientoAdminService, EmprendimientoService } from 'src/app/services/emprendimiento.service';
import {
  CantonService,
  DistritoService,
  ProvinciaService,
} from 'src/app/services/lugares.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-emprendimiento',
  templateUrl: './formulario-emprendimiento.component.html',
  styleUrls: ['./formulario-emprendimiento.component.css'],
})
export class FormularioEmprendimientoComponent {
  objeto: Emprendimiento = new Emprendimiento();
  constructor(
    private service: EmprendimientoService,
    private provinciaService: ProvinciaService,
    private cantonService: CantonService,
    private distritoService: DistritoService,
    private adminsService: EmprendimientoAdminService, 
    private cookieService: CookieService,  
    private route: Router,
    private rou: ActivatedRoute
  ) {
    this.getProvincias();
  }

  provincias: Province[] = [];
  cantones: Canton[] = [];
  distritos: Distrito[] = [];
  confirm = '';
  temp:EmprendimientoAdmin = new EmprendimientoAdmin;

  guardar() {
    Swal.fire({
      title: "¿Quieres registrarte en Club Creativo como Emprendedor?",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar!"
    }).then((result) => {
      if (result.isConfirmed) {
          this.objeto.State = 'Pendiente';
          this.service.add(this.objeto).subscribe({
            next:(data) =>{
              this.temp.IdClient = this.cookieService.get("cookieCLIENTE");
              this.temp.IdEntrepreneurship = this.objeto.Username;
              this.temp.state = "Aceptado"
              this.adminsService.add(this.temp).subscribe({
                next: (data) =>{
                  console.log("Añadido");
                  this.service.successMessage("Registro exitoso", "/ingresar");
                }
              })
            }, error:(err) =>{
              console.log(err)
              this.service.errorMessage(err.error.Message)
            }
          })
      }
    });
  }

  selected() {
    this.getCantones();
    this.objeto.District = '';
  }

  selectedcant() {
    this.getDistritos();
  }

  getProvincias() {
    this.provinciaService.getList().subscribe({
      next: (data) => {
        this.provincias = data;
      },
    });
  }

  getCantones() {
    this.cantonService.getSelectedList(this.objeto.Province).subscribe({
      next: (data) => {
        this.cantones = data;
      },
    });
  }

  getDistritos() {
    this.distritoService.getSelectedList(this.objeto.Canton).subscribe({
      next: (data) => {
        this.distritos = data;
      },
    });
  }
  redirigir(url: string) {
    window.location.href = url;
  }
}
