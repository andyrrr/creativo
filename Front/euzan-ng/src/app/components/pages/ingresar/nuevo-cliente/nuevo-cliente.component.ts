import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { Province, Canton, Distrito } from 'src/app/interfaces/lugares';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProvinciaService, CantonService, DistritoService } from 'src/app/services/lugares.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrl: './nuevo-cliente.component.scss'
})
export class NuevoClienteComponent {
  objeto = new Cliente;
  
  constructor(private service:ClienteService,
    private provinciaService: ProvinciaService,
    private cantonService: CantonService,
    private distritoService: DistritoService,
    private route: Router,
    private rou: ActivatedRoute
  ) {
    this.getProvincias();
  }
  
  provincias: Province[] = [];
    cantones: Canton[] = [];
    distritos: Distrito[] = [];
    confirm = "";
  
  
  
  guardar(){
    Swal.fire({
      title: "¿Quieres registrarte en Club Creativo como Cliente?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar"
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.confirm === this.objeto.Password) {
          this.service.add(this.objeto).subscribe({
            next:(data) =>{
              this.service.successMessage("Registro exitoso", "/ingresar");
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
  
  selected() {
    this.getCantones();
    this.objeto.District ="";
  }
  
  selectedcant() {
    this.getDistritos();
  }
  
  getProvincias() {
    this.provinciaService.getList().subscribe({
        next: (data) => {
          this.provincias= data;
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
  
  redirigir(url:string) {
    window.location.href = url;
  }
  
  }
  