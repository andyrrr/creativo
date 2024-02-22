import { Injectable } from '@angular/core';
import { ConexionService } from './conexion.service';
import { RoleInterface } from '../interfaces/role';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends ConexionService<RoleInterface>{
  getResourceURL(): string {
    return '/Roles';
  }
  getHomePage(): string {
    return 'role?';
  }
  getNombre(): string {
    return 'role?';
  }

  constructor(
    protected override httpClient: HttpClient,
    protected override route: Router
  ) {
    super(httpClient, route);
  }
}