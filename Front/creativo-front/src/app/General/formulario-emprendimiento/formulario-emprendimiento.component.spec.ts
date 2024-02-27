import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEmprendimientoComponent } from './formulario-emprendimiento.component';

describe('FormularioEmprendimientoComponent', () => {
  let component: FormularioEmprendimientoComponent;
  let fixture: ComponentFixture<FormularioEmprendimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEmprendimientoComponent]
    });
    fixture = TestBed.createComponent(FormularioEmprendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
