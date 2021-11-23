import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservaService } from '../../shared/service/reserva.service';
import { Observable } from 'rxjs';
import { Tipo } from '../../shared/model/tipo';
import { Glamping } from '@reserva/shared/model/glamping';
import * as moment from 'moment';
import { SwalService } from '@core/services/swal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  public listaTiposGlamping: Observable<Tipo[]>;
  public listaGlamping: Observable<Glamping[]>;
  reservaForm: FormGroup;  

  tiposGlamping: Tipo[]=[];
  glamping: Glamping[]=[];

  constructor(
    protected reservaService: ReservaService,
    protected swalService: SwalService,
    protected router:Router
    ) { }

  ngOnInit(){
    this.listaGlamping = this.reservaService.consultarGlamping();

  
    this.listaGlamping.subscribe((data:Glamping[])=>{
      this.glamping=[...data];
      
    })

    this.construirFormularioReserva();
    
  }

  // private construirFormularioReserva(){
  //   this.reservaForm = this.form({
  //     id: [''],
  //     cedula: ['', [Validators.required]],
  //     nombre: ['', [Validators.required]],
  //     fechaEntrada: ['', [Validators.required]],
  //     idGlamping: ['', [Validators.required]],
  //     cantPersonas: ['', [Validators.required]],
  //     telefono: ['', [Validators.required]],
  //     fechaSalida: ['', [Validators.required]],
  //     costoTotal: [1, [Validators.required]],
  //     fechaRegistro:['', [Validators.required]]
      
  //   })
  // }

  private construirFormularioReserva(){
    this.reservaForm = new FormGroup({
        id: new FormControl(0),
        cedula: new FormControl('', [Validators.required]),
        nombre: new FormControl('', [Validators.required]),
        fechaEntrada: new FormControl('', [Validators.required]),
        idGlamping: new FormControl('', [Validators.required]),
        cantPersonas: new FormControl('', [Validators.required]),
        telefono: new FormControl('', [Validators.required]),
        fechaSalida: new FormControl('', [Validators.required]),
        costoTotal: new FormControl(1),
        fechaRegistro: new FormControl('')
        
    })
  }


  guardar(){
    console.log('form ',this.reservaForm.value)
    this.reservaForm.value.fechaRegistro = this.obtenerFechaActual();
    this.reservaForm.value.fechaEntrada = this.formatearFechaSinHora(new Date(this.reservaForm.value.fechaEntrada));
    this.reservaForm.value.fechaSalida = this.formatearFechaSinHora(new Date(this.reservaForm.value.fechaSalida));
    this.reservaForm.value.telefono = String(this.reservaForm.value.telefono);
    this.reservaForm.value.idGlamping = this.reservaForm.value.idGlamping.id;

    // if(this.reservaForm.valid){
      this.reservaService.guardar(this.reservaForm.value).subscribe(
        () => {
          this.swalService.succes("Reserva creada correctamente");
       
          this.router.navigate(["/reserva/listar"]);
          
        },
        (error) => {
          this.swalService.danger(error.error.mensaje);
         
        }
      );
    // }else{
      
    //   this.swalService.alert("Todos los campos son obligatorios");
     
    // }


  }
  private obtenerFechaActual() {
    return this.formatearFechaConHora(moment().toDate());
  }

  private formatearFechaConHora(fecha: Date) {
    let fechaNueva = moment(fecha).format('YYYY-MM-DD HH:mm:ss');
    return fechaNueva;
  }

  private formatearFechaSinHora(fecha: Date) {
    let fechaNueva = moment(fecha).format('YYYY-MM-DD');
    return fechaNueva;
  }



}
