import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Emprendimiento, EmprendimientoAdmin } from 'src/app/interfaces/emprendimiento';
import { Province, Canton, Distrito } from 'src/app/interfaces/lugares';
import { Tipos } from 'src/app/interfaces/tipos';
import { EmprendimientoService, EmprendimientoAdminService } from 'src/app/services/emprendimiento.service';
import { ProvinciaService, CantonService, DistritoService } from 'src/app/services/lugares.service';
import { TiposService } from 'src/app/services/tipos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-emprendimiento',
  templateUrl: './agregar-emprendimiento.component.html',
  styleUrl: './agregar-emprendimiento.component.scss'
})
export class AgregarEmprendimientoComponent {
  objeto: Emprendimiento = new Emprendimiento();
  constructor(
    private service: EmprendimientoService,
    private provinciaService: ProvinciaService,
    private cantonService: CantonService,
    private distritoService: DistritoService,
    private adminsService: EmprendimientoAdminService, 
    private tiposService:TiposService,
    private cookieService: CookieService,  
    private route: Router,
    private rou: ActivatedRoute
  ) {
    this.getProvincias();
    this.objeto.IdType = "Fisica"
    this.tiposService.getList().subscribe({
      next:(data) =>{
        this.tipos = data
        console.log(this.tipos)
      }
    })

  }

  provincias: Province[] = [];
  cantones: Canton[] = [];
  distritos: Distrito[] = [];
  tipos: Tipos[] = [];
  confirm = '';
  temp:EmprendimientoAdmin = new EmprendimientoAdmin;

  guardar() {
    Swal.fire({
      title: "¿Quieres registrarte en Club Creativo como Emprendedor?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar"
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
                  this.service.successMessage("Registro exitoso", "/dashboard-cliente");
                }, error:(err) => {
                  console.log(err)
                  this.service.errorMessage(err.error.Message)
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
