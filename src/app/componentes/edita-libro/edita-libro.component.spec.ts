import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaLibroComponent } from './edita-libro.component';

describe('EditaLibroComponent', () => {
  let component: EditaLibroComponent;
  let fixture: ComponentFixture<EditaLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
