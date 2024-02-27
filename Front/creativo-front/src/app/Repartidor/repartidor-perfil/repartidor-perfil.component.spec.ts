import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidorPerfilComponent } from './repartidor-perfil.component';

describe('RepartidorPerfilComponent', () => {
  let component: RepartidorPerfilComponent;
  let fixture: ComponentFixture<RepartidorPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepartidorPerfilComponent]
    });
    fixture = TestBed.createComponent(RepartidorPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
