import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservaService } from '../../shared/service/reserva.service';
import { Observable } from 'rxjs';
import { Tipo } from '../../shared/model/tipo';
import { Glamping } from '@reserva/shared/model/glamping';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  public listaTiposGlamping: Observable<Tipo[]>;
  public listaGlamping: Observable<Glamping[]>;
  // reservaForm: FormGroup;  

  tiposGlamping: Tipo[]=[];
  glamping: Glamping[]=[];

  constructor(protected reservaService: ReservaService) { }

  ngOnInit(){
    this.listaTiposGlamping = this.reservaService.consultarTiposglamping();
    this.listaGlamping = this.reservaService.consultarGlamping();

    this.listaTiposGlamping.subscribe((data:Tipo[])=>{
      console.log('tipos ',data);
    })

    this.listaGlamping.subscribe((data:Glamping[])=>{
      console.log('glamping ',data)
      
    })
    
  }

  // private construirFormularioReserva(){
  //   this.reservaForm = new FormGroup({
        
  //   })
  // }

}
