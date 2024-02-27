import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprendimientoPerfilComponent } from './emprendimiento-perfil.component';

describe('EmprendimientoPerfilComponent', () => {
  let component: EmprendimientoPerfilComponent;
  let fixture: ComponentFixture<EmprendimientoPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmprendimientoPerfilComponent]
    });
    fixture = TestBed.createComponent(EmprendimientoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
