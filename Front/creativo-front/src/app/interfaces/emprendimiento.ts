export interface EmprendimientoInterface {
    IdEntrepreneurship:number;
    Username:string;
    Password:string;
    Type:string;
    Name:string;
    Email:string;
    Sinpe:string;
    Phone:string;
    Province:string;
    Canton:string;
    District:string;
    State:string;
}


export class Emprendimiento implements EmprendimientoInterface{
    IdEntrepreneurship!: number;
    Username!: string;
    Password!: string;
    Type!: string;
    Name!: string;
    Email!: string;
    Sinpe!: string;
    Phone!: string;
    Province!: string;
    Canton!: string;
    District!: string;
    State!: string;
    

}