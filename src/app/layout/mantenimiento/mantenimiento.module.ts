import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MantenimientoRoutingModule} from './mantenimiento-routing.module';
import {MantenimientoComponent} from './mantenimiento.component';

@NgModule({
    imports: [CommonModule, MantenimientoRoutingModule, FormsModule],
    declarations: [MantenimientoComponent]
})
export class MantenimientoModule {
}
