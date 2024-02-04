import { Component } from '@angular/core';
import { Pregunta } from 'src/app/interfaces/pregunta';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.css']
})
export class PreguntasFrecuentesComponent {

  preguntas:Pregunta[] = []

  constructor(private service: PreguntasService){

  }

  ngOnInit(): void {
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

  redirigir(url:string) {
    window.location.href = url;
  }
}
