import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEmprendimientosComponent } from './cliente-emprendimientos.component';

describe('ClienteEmprendimientosComponent', () => {
  let component: ClienteEmprendimientosComponent;
  let fixture: ComponentFixture<ClienteEmprendimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteEmprendimientosComponent]
    });
    fixture = TestBed.createComponent(ClienteEmprendimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
