import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPrestamoComponent } from './consultar-prestamo.component';

describe('ConsultarPrestamoComponent', () => {
  let component: ConsultarPrestamoComponent;
  let fixture: ComponentFixture<ConsultarPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPrestamoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
