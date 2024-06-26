import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAdministradorComponent } from './agregar-administrador.component';

describe('AgregarAdministradorComponent', () => {
  let component: AgregarAdministradorComponent;
  let fixture: ComponentFixture<AgregarAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarAdministradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
