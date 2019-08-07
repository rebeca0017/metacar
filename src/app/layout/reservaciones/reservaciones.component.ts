import {Component, OnInit} from '@angular/core';
import {ServicioService} from '../../servicio.service';
import {Usuario} from '../../modelos/Usuario';
import {Cliente} from '../../modelos/Cliente';
import {Vehiculo} from '../../modelos/Vehiculo';
import {Mantenimiento} from '../../modelos/mantenimiento';
import {Reservacion} from '../../modelos/reservacion';
import {Servicio} from '../../modelos/servicio';

@Component({
    selector: 'app-blank-page',
    templateUrl: './reservaciones.component.html',
    styleUrls: ['./reservaciones.component.scss']
})
export class ReservacionesComponent implements OnInit {
    usuario: Usuario;
    cliente: Cliente;
    vehiculo: Vehiculo;
    serv: Servicio;
    servs: Array<Servicio>;
    vehiculos: Array<Vehiculo>;
    mantenimiento: Mantenimiento;
    mantenimientos: Array<Mantenimiento>;
    reservacion: Reservacion;
    reservaciones: Array<Reservacion>;

    constructor(private servicio: ServicioService) {
    }

    ngOnInit() {
        this.usuario = JSON.parse(localStorage.getItem('usuario')) as Usuario;
        this.serv = new Servicio();
        this.servs = new Array<Servicio>();
        this.cliente = new Cliente();
        this.vehiculo = new Vehiculo();
        this.vehiculos = new Array<Vehiculo>();
        this.mantenimiento = new Mantenimiento();
        this.mantenimientos = new Array<Mantenimiento>();
        this.reservacion = new Reservacion();
        this.obtenerMantenimientosAdministrador();

    }





    obtenerMantenimientosAdministrador() {
        this.servicio.get('mantenimientos/administradores').subscribe(
            respuesta => {
                this.reservaciones = respuesta as Array<Reservacion>;

            }
        );
    }

}
