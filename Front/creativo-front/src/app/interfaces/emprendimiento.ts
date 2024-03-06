export interface EmprendimientoInterface {
    IdEntrepreneurship:number;
    Username:string;
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

export interface EmprendimientoAdminInterface {
    IdEntrepreneurship:string;
    IdClient:string;
    state:string;
}

export class EmprendimientoAdmin implements EmprendimientoAdminInterface{
    IdEntrepreneurship!: string;
    IdClient!: string;
    state!: string;
}