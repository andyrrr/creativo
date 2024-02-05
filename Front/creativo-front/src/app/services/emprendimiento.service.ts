import { Injectable } from '@angular/core';
import { EmprendimientoInterface } from '../interfaces/emprendimiento';
import { ConexionService } from './conexion.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmprendimientoService extends ConexionService<EmprendimientoInterface> {
  getResourceURL(): string {
    return '/EMPRENDIMIENTOS';
  }
  getHomePage(): string {
    return 'emprendimientos';
  }
  getNombre(): string {
    return 'emprendimiento';
  }

  constructor(
    protected override httpClient: HttpClient,
    protected override route: Router
  ) {
    super(httpClient, route);
  }
}