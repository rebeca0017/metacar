import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ClienteRoutingModule} from './cliente-routing.module';
import {ClienteComponent} from './cliente.component';

@NgModule({
    imports: [CommonModule, ClienteRoutingModule, FormsModule],
    declarations: [ClienteComponent]
})
export class ClienteModule {
}
