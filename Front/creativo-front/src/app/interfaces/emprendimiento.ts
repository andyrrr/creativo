export interface EmprendimientoInterface {
    IdEmprendimiento:number;
    Usuario:string;
    Pass:string;
    Tipo:string;
    Nombre:string;
    Correo:string;
    Sinpe:string;
    Telefono:string;
    Provincia:string;
    Canton:string;
    Distrito:string;
    Estado:string;
}


export class Emprendimiento implements EmprendimientoInterface{
    IdEmprendimiento!: number;
    Usuario!: string;
    Pass!: string;
    Tipo!: string;
    Nombre!: string;
    Correo!: string;
    Sinpe!: string;
    Telefono!: string;
    Provincia!: string;
    Canton!: string;
    Distrito!: string;
    Estado!: string;

}