import { Component } from '@angular/core';
import { Administrador } from 'src/app/interfaces/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-gestion-administradores',
  templateUrl: './gestion-administradores.component.html',
  styleUrls: ['./gestion-administradores.component.css']
})
export class GestionAdministradoresComponent {

  admins:Administrador[] = [];
  objeto: Administrador = new Administrador();

  constructor(private service: AdministradorService){
    this.service.getList().subscribe({
      next:(data) => {
        this.admins = data;
        console.log(this.admins)
      }, 
      error: (err) =>{
        console.log(err)
      }
    })
  }


  redirigir(url:string) {
    window.location.href = url;
  }

  eliminarPregunta(id:number){
    this.service.delete(id).subscribe({
      next:(data)=>{
        console.log("eliminado");
        window.location.reload();
      }, error:(err) => {
        console.log(err)
      }
    })
  }

}
