import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReservacionesRoutingModule} from './reservaciones-routing.module';
import {ReservacionesComponent} from './reservaciones.component';

@NgModule({
    imports: [CommonModule, ReservacionesRoutingModule, FormsModule],
    declarations: [ReservacionesComponent]
})
export class ReservacionesModule {
}
