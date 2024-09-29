import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEnjuegoComponent } from './card-enjuego.component';

describe('CardEnjuegoComponent', () => {
  let component: CardEnjuegoComponent;
  let fixture: ComponentFixture<CardEnjuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEnjuegoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEnjuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
