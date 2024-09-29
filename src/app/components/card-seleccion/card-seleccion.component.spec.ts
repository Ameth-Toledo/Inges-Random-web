import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSeleccionComponent } from './card-seleccion.component';

describe('CardSeleccionComponent', () => {
  let component: CardSeleccionComponent;
  let fixture: ComponentFixture<CardSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSeleccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
