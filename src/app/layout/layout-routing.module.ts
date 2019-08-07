import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
            {path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule)},
            {path: 'clientes', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)},
            {path: 'servicios', loadChildren: () => import('./servicio/servicio.module').then(m => m.ServicioModule)},
            {path: 'mantenimientos', loadChildren: () => import('./mantenimiento/mantenimiento.module').then(m => m.MantenimientoModule)},
            {path: 'reservaciones', loadChildren: () => import('./reservaciones/reservaciones.module').then(m => m.ReservacionesModule)},

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
