import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent {
objeto = new Cliente;

constructor(private service:ClienteService, private route:Router, private rou:ActivatedRoute){
}


guardar(){
  this.service.add(this.objeto).subscribe({
    next:(data) =>{
      console.log(data);
      this.redirigir("/inicio");
    }, error:(err) =>{
      console.log(err)
    }
  })
}

redirigir(url:string) {
  window.location.href = url;
}

}
