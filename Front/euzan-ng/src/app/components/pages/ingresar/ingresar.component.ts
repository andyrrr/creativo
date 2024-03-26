import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Role } from 'src/app/interfaces/role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-ingresar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ingresar.component.html',
  styleUrl: './ingresar.component.scss'
})
export class IngresarComponent {
  usuario:string="";
  pass:string="";
  rol:Role = new Role;

  constructor(private service:RoleService, private cookieService: CookieService){
    if (cookieService.get("cookieADMIN") !="") {
      this.redirigir("/dashboard-admin")
    } else if (cookieService.get("cookieEMPRENDIMIENTO") !="") {
      this.redirigir("/dashboard-emprendimiento")
    } else if (cookieService.get("cookieCLIENTE") !="") {
      this.redirigir("/dashboard-cliente")
    } else if (cookieService.get("cookieREPARTIDOR") !="") {
      this.redirigir("/dashboard-repartidor")
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
          this.service.successMessage("¡Bienvenido a tu cuenta!", "/ingresar")
        }, 
        error:(err) => {
          this.service.errorMessage(err.error.Message)
        }
      })
    }
    this.service.errorMessage("Completa los espacios en blanco")
  }
}
