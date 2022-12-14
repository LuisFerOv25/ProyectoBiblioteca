import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestarLibroComponent } from './prestar-libro.component';

describe('PrestarLibroComponent', () => {
  let component: PrestarLibroComponent;
  let fixture: ComponentFixture<PrestarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestarLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
