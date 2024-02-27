import { Component } from '@angular/core';
import { Role } from 'src/app/interfaces/role';
import { RoleService } from 'src/app/services/role.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario:string="";
  pass:string="";
  rol:Role = new Role;

  constructor(private service:RoleService, private cookieService: CookieService){
    if (cookieService.get("cookieADMIN") !="") {
      this.redirigir("/solicitudes")
    } else if (cookieService.get("cookieEMPRENDIMIENTO") !="") {
      this.redirigir("/emprendimiento-perfil")
    } else if (cookieService.get("cookieCLIENTE") !="") {
      this.redirigir("/cliente-perfil")
    } else if (cookieService.get("cookieREPARTIDOR") !="") {
      this.redirigir("/repartidor-perfil")
    }

  }

  redirigir(url:string) {
    window.location.href = url;
  }

  Ingresar(){
    if (this.usuario != "" && this.pass != "") {
      this.service.get(this.usuario, this.pass).subscribe({
        next:(data) => {
          this.rol = data
          console.log(this.rol)
          this.cookieService.set('cookie' + this.rol.Type, this.rol.Username);
          window.location.reload()
        }, 
        error:(err) => {
          console.log(err.error.Message)
        }
      })
    }

  }
}
