import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';
import { Tipo } from '../model/tipo';
import { Glamping } from '../model/glamping';


@Injectable()
export class ReservaService {

  reserva: Reserva;
  tipoGlamping: Tipo;
  glamping: Glamping;
  constructor(protected http: HttpService) { }

  public consultar(){
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas`);
  }

  public guardar(reserva: Reserva){
    return this.http.doPost<Reserva, boolean>(`${environment.endpoint}/reserva`, reserva);
  }

  public consultarTiposglamping(){
    return this.http.doGet<Tipo[]>(`${environment.endpoint}/tipoGlamping`);
  }

  public consultarGlamping(){
    return this.http.doGet<Glamping[]>(`${environment.endpoint}/glampings`);
  }

}
