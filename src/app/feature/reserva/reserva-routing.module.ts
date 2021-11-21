import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';


const routes: Routes = [
    {
      path: '',
      component: ReservaComponent,
      children: [
        {
          path: '',
          redirectTo: '/reserva/listar',
          pathMatch: 'full'

        },
        {
          path: 'listar',
          component: ListarReservaComponent
        }
      ]
    }
  ];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ReservaRoutingModule { }
  