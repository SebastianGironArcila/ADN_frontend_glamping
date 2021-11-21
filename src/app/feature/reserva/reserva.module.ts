import { NgModule } from '@angular/core';

import { ReservaComponent } from './components/reserva/reserva.component';
import { SharedModule } from '@shared/shared.module';
import { ReservaRoutingModule } from './reserva-routing.module';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';



@NgModule({
  declarations: [
    ReservaComponent,
    ListarReservaComponent
  ],
  imports: [
    ReservaRoutingModule,
    SharedModule
  ]
})
export class ReservaModule { }
