import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pregunta } from 'src/app/interfaces/pregunta';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-gestion-preguntas',
  templateUrl: './gestion-preguntas.component.html',
  styleUrls: ['./gestion-preguntas.component.css']
})
export class GestionPreguntasComponent {
  preguntas:Pregunta[] = []

  constructor(private service: PreguntasService, private route:Router, private rou:ActivatedRoute){
    this.service.getList().subscribe({
      next:(data) => {
        this.preguntas = data;
        console.log(this.preguntas)
      }, 
      error: (err) =>{
        console.log(err)
      }
    })
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


  redirigir(url:string) {
    window.location.href = url;
  }
}
