import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Role } from 'src/app/interfaces/role';

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
  }
  redirigir(url:string) {
    window.location.href = url;
  }
}
