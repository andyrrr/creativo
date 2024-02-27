import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRepartidorComponent } from './formulario-repartidor.component';

describe('FormularioRepartidorComponent', () => {
  let component: FormularioRepartidorComponent;
  let fixture: ComponentFixture<FormularioRepartidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioRepartidorComponent]
    });
    fixture = TestBed.createComponent(FormularioRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
