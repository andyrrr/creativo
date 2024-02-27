import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pregunta } from 'src/app/interfaces/pregunta';
import { PreguntasService } from 'src/app/services/preguntas.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: "¿Quieres dejar de editar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Salir!"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = url;
      }
    });
  }

  guardar(){
    
      Swal.fire({
        title: "¿Quieres añadir esta pregunta?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar!"
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.editMode){
            this.service.update(this.objeto.IdQuestion, this.objeto).subscribe({
              next:(data) => {
                this.service.successMessage("Pregunta correctamente modificada", "/gestion-preguntas");
              }, error:(err) => {
                this.service.errorMessage(err.error.Message);
              } 
            })
          } else {
            this.service.add(this.objeto).subscribe({
              next:(data) => {
                this.service.successMessage("Pregunta correctamente añadida", "/gestion-preguntas");
              }, error:(err) => {
                this.service.errorMessage(err.error.Message);
              } 
            })
          }
        }
      });
  }

}
