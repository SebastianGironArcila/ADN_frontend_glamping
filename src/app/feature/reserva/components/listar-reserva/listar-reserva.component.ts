import { Component, OnInit} from '@angular/core';
import { Reserva } from '@reserva/shared/model/reserva';
import { Observable } from 'rxjs';
import { ReservaService } from '@reserva/shared/service/reserva.service';



@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {

  public listaReservas: Observable<Reserva[]>;


  reservas: Reserva[] = [];

  constructor(protected reservaService: ReservaService) {
    
   }

  ngOnInit(){
    this.listaReservas = this.reservaService.consultar();

   
    
  }

}
