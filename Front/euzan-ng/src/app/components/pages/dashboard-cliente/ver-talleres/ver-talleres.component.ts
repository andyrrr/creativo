import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Taller, TallerClient } from 'src/app/interfaces/talleres';
import { TallerClientesService, TalleresService } from 'src/app/services/talleres.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-talleres',
  templateUrl: './ver-talleres.component.html',
  styleUrl: './ver-talleres.component.scss'
})
export class VerTalleresComponent {

  talleres:Taller[] = [];
  suscripcion:TallerClient = new TallerClient();

  constructor(private suscripcionService: TallerClientesService, private service: TalleresService, private cookieService: CookieService){
    this.service.getList().subscribe({
      next:(data) => {
        this.talleres = data;
        console.log(this.talleres)
      }, 
      error: (err) =>{
        console.log(err)
      }
    })
  }


  redirigir(url:string) {
    window.location.href = url;
  }

  suscribirse(id:number){
    Swal.fire({
      title: "¿Quieres suscribirte a este taller?",
      text: "No lo vas a poder revertir!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Suscribirme!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.suscripcion.IdWorkshop = id;
        this.suscripcion.IdClient = this.cookieService.get("cookieCLIENTE");

        console.log(this.suscripcion);

        this.suscripcionService.add(this.suscripcion).subscribe({
          next:(data)=>{
            this.service.successMessage("Te has suscrito al taller con éxito", "/dashboard-cliente");
          }, error:(err) => {
            this.service.errorMessage(err.error.Message);
          }
        })
      }
    });
  }
}
