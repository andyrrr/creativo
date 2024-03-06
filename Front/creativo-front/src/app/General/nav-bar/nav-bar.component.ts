import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Role } from 'src/app/interfaces/role';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  rol = new Role()
  unregistered = false;

  constructor(private cookieService: CookieService){
    if (cookieService.get("cookieADMIN") !="") {
      this.rol.Type = "ADMIN"
      this.rol.Username = cookieService.get("cookieADMIN")

    } else if (cookieService.get("cookieEMPRENDIMIENTO") !="") {
      this.rol.Type = "EMPRENDIMIENTO"
      this.rol.Username = cookieService.get("cookieEMPRENDIMIENTO")

    } else if (cookieService.get("cookieCLIENTE") !="") {
      this.rol.Type = "CLIENTE"
      this.rol.Username = cookieService.get("cookieCLIENTE")

    } else if (cookieService.get("cookieREPARTIDOR") !="") {
      this.rol.Type = "REPARTIDOR"
      this.rol.Username = cookieService.get("cookieREPARTIDOR")
    } else {
      this.unregistered = true;
    }
    
    const currentPath = window.location.pathname;
    if (currentPath === '/ingresar') {
      this.unregistered = false; 
    }
  }
  redirigir(url:string) {
    window.location.href = url;
  }

  volverCuenta(){

    Swal.fire({
      title: "¿Quieres cambiar a tu cuenta de Cliente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cambiar de cuenta!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.cookieService.delete("cookieEMPRENDIMIENTO");
        this.redirigir("/cliente-emprendimientos");
      }
    });
    
  }

  logOut(){
    Swal.fire({
      title: "¿Quieres salir de tu cuenta en Club Creativo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Salir!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.cookieService.delete("cookieREPARTIDOR");
        this.cookieService.delete("cookieCLIENTE");
        this.cookieService.delete("cookieEMPRENDIMIENTO");
        this.cookieService.delete("cookieADMIN");
        this.redirigir("/inicio");
      }
    });


    
  }

  
}
