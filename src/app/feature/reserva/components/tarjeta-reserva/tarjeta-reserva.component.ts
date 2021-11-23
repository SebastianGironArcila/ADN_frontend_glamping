import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from '@reserva/shared/model/reserva';

@Component({
  selector: 'app-tarjeta-reserva',
  templateUrl: './tarjeta-reserva.component.html',
  styleUrls: ['./tarjeta-reserva.component.css']
})
export class TarjetaReservaComponent implements OnInit {

  @Input() reserva: Reserva;
  
  constructor() { }

  ngOnInit(): void {
  }

}
