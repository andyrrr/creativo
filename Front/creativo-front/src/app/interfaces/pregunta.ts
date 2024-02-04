export interface PreguntaInterface {
    IdPreguntas: number;
    Pregunta1: string;
    Respuesta: string;

}


export class Pregunta implements PreguntaInterface{
    IdPreguntas!: number;
    Pregunta1!: string;
    Respuesta!: string;
}
