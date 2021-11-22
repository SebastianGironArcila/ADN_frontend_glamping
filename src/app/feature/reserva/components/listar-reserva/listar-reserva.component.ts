import { Component, OnInit} from '@angular/core';
import { Reserva } from '@reserva/shared/model/reserva';




@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {
  


  fechaEnt: Date;
  fechaSal: Date;
  fechaReg: Date;
  
  
  reservas: Reserva[] = [];

  constructor() {
    this.fechaEnt = new Date('2020-02-09');
    this.fechaSal = new Date('2020-02-11');
    this.fechaReg = new Date('2020-02-01 08:05:30')
    this.reservas[0] = new Reserva(1,'1116275325','Sebastian',this.fechaEnt,1,4,'3053198749',this.fechaSal,250000,this.fechaReg);
    this.reservas[1] = new Reserva(2,'1116275325','Carlos',this.fechaEnt,2,3,'3053198749',this.fechaSal,480000,this.fechaReg);
    this.reservas[2] = new Reserva(3,'1116275325','Carlos',this.fechaEnt,3,2,'3053198749',this.fechaSal,4848454,this.fechaReg);
    this.reservas[3] = new Reserva(4,'1116275325','Carlos',this.fechaEnt,4,6,'3053198749',this.fechaSal,987745,this.fechaReg);
    this.reservas[4] = new Reserva(2,'1116275325','Carlos',this.fechaEnt,4,7,'3053198749',this.fechaSal,49794,this.fechaReg);
   }

  ngOnInit(): void {
    
  }

}
