import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaReservaComponent } from './tarjeta-reserva.component';

describe('TarjetaReservaComponent', () => {
  let component: TarjetaReservaComponent;
  let fixture: ComponentFixture<TarjetaReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
