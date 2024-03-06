import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprendimientoAdminsComponent } from './emprendimiento-admins.component';

describe('EmprendimientoAdminsComponent', () => {
  let component: EmprendimientoAdminsComponent;
  let fixture: ComponentFixture<EmprendimientoAdminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmprendimientoAdminsComponent]
    });
    fixture = TestBed.createComponent(EmprendimientoAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
