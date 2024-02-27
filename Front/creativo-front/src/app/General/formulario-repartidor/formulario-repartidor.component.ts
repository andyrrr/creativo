import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Province, Canton, Distrito } from 'src/app/interfaces/lugares';
import { Repartidor } from 'src/app/interfaces/repartidor';
import { ProvinciaService, CantonService, DistritoService } from 'src/app/services/lugares.service';
import { RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-formulario-repartidor',
  templateUrl: './formulario-repartidor.component.html',
  styleUrls: ['./formulario-repartidor.component.css']
})
export class FormularioRepartidorComponent {
  objeto = new Repartidor();
  
  constructor(private service:RepartidorService,
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
    if (this.confirm === this.objeto.Password){
      this.objeto.State="Disponible"
      this.service.add(this.objeto).subscribe({
        next:(data) =>{
          console.log(data);
          this.redirigir("/inicio");
        }, error:(err) =>{
          console.log(err)
        }
      })
    }
    
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
  