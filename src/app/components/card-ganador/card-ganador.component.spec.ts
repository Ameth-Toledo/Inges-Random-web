import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGanadorComponent } from './card-ganador.component';

describe('CardGanadorComponent', () => {
  let component: CardGanadorComponent;
  let fixture: ComponentFixture<CardGanadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGanadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGanadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
