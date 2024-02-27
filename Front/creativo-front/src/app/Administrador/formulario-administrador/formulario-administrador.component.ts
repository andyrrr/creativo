import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Administrador } from 'src/app/interfaces/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';

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
    if (this.confirm === this.objeto.Password) {
      this.service.add(this.objeto).subscribe({
        next:(data) =>{
          console.log(data);
          this.redirigir("/administradores");
        }, error:(err) =>{
          console.log(err)
        }
      })
    }
  }

  redirigir(url:string) {
    window.location.href = url;
  }

}
