import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pregunta } from 'src/app/interfaces/pregunta';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.css']
})
export class NuevaPreguntaComponent {

  objeto:Pregunta = new Pregunta();
  editMode:boolean = true;

  constructor(private service:PreguntasService, private route:Router, private rou:ActivatedRoute) {
    if(this.rou.snapshot.params['id']==undefined){
      this.editMode = false
    } else {
      this.service.get(this.rou.snapshot.params['id']).subscribe({
        next:(data) =>{
          this.objeto = data
        }, error:(err) => {
          console.log(err)
        }
      })
    }
  }

  redirigir(url:string) {
    window.location.href = url;
  }

  guardar(){
    if (this.editMode){
      this.service.update(this.objeto.IdPreguntas, this.objeto).subscribe({
        next:(data) => {
          this.redirigir("/gestion-preguntas")
        }, error:(err) => {
          console.log(err)
        } 
      })
    } else {
      this.service.add(this.objeto).subscribe({
        next:(data) => {
          this.redirigir("/gestion-preguntas")
        }, error:(err) => {
          console.log(err)
        } 
      })
    }

  }

}
