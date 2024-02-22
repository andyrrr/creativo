import { Component } from '@angular/core';
import { Role } from 'src/app/interfaces/role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario:string="";
  pass:string="";
  rol:Role = new Role;

  constructor(private service:RoleService){

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
        }, 
        error:(err) => {
          console.log(err.error.Message)
        }
      })
    }

  }
}
