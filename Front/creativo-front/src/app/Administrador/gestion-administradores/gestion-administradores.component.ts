import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-administradores',
  templateUrl: './gestion-administradores.component.html',
  styleUrls: ['./gestion-administradores.component.css']
})
export class GestionAdministradoresComponent {

  redirigir(url:string) {
    window.location.href = url;
  }
}
