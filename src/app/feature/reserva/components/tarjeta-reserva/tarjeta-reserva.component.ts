import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from '@reserva/shared/model/reserva';
import { ReservaService } from '../../shared/service/reserva.service';
import { SwalService } from '../../../../core/services/swal.service';

@Component({
  selector: 'app-tarjeta-reserva',
  templateUrl: './tarjeta-reserva.component.html',
  styleUrls: ['./tarjeta-reserva.component.css']
})
export class TarjetaReservaComponent implements OnInit {

  @Input() reserva: Reserva;
  
  constructor(
    protected service: ReservaService,
    protected swalService: SwalService
  ) { }

  ngOnInit(): void {
  }

  eliminarReserva(reserva:Reserva){
    this.service.eliminar(reserva).subscribe(()=>{
      this.swalService.danger("Reserva eliminada correctamente");
      //this.swalService.confirm('Advertencia' ,'¿Seguro deseas eliminar esta reserva?',);

      
    })
  }

}
