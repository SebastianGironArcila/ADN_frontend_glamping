import { NgModule } from '@angular/core';

import { ReservaComponent } from './components/reserva/reserva.component';
import { SharedModule } from '@shared/shared.module';
import { ReservaRoutingModule } from './reserva-routing.module';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { TarjetaReservaComponent } from './components/tarjeta-reserva/tarjeta-reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ReservaService } from './shared/service/reserva.service';



@NgModule({
  declarations: [
    ReservaComponent,
    ListarReservaComponent,
    TarjetaReservaComponent,
    CrearReservaComponent
  ],
  imports: [
    ReservaRoutingModule,
    SharedModule
  ],
  providers:[ReservaService]
})
export class ReservaModule { }
