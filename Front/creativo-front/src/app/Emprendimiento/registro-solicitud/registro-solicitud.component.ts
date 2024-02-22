import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Emprendimiento } from 'src/app/interfaces/emprendimiento';
import { EmprendimientoService } from 'src/app/services/emprendimiento.service';

@Component({
  selector: 'app-registro-solicitud',
  templateUrl: './registro-solicitud.component.html',
  styleUrls: ['./registro-solicitud.component.css']
})
export class RegistroSolicitudComponent {
  objeto:Emprendimiento = new Emprendimiento();
  
  constructor(private service:EmprendimientoService, private route:Router, private rou:ActivatedRoute){
  }


  guardar(){
    this.objeto.State = "Pendiente"
    this.service.add(this.objeto).subscribe({
      next:(data) =>{
        console.log(data);
        this.redirigir("/solicitudes");
      }, error:(err) =>{
        console.log(err)
      }
    })
  }



  redirigir(url:string) {
    window.location.href = url;
  }
}
