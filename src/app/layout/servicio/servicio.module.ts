import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ServicioRoutingModule} from './servicio-routing.module';
import {ServicioComponent} from './servicio.component';

@NgModule({
    imports: [CommonModule, ServicioRoutingModule, FormsModule],
    declarations: [ServicioComponent]
})
export class ServicioModule {
}
