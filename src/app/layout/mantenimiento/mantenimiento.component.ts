import {Component, OnInit} from '@angular/core';
import {ServicioService} from '../../servicio.service';
import {Usuario} from '../../modelos/Usuario';
import {Cliente} from '../../modelos/Cliente';
import {Vehiculo} from '../../modelos/Vehiculo';
import {Servicio} from '../../modelos/Servicio';
import {Mantenimiento} from '../../modelos/mantenimiento';

@Component({
    selector: 'app-servicio',
    templateUrl: './mantenimiento.component.html',
    styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {
    mantenimiento: Mantenimiento;
    mantenimientos: Array<Mantenimiento>;
    serv: Servicio;
    servs: Array<Servicio>;
    usuario: Usuario;
    cliente: Cliente;
    vehiculo: Vehiculo;
    vehiculos: Array<Vehiculo>;

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
        this.obtenerDatosCliente();
        this.obtenerServicios();


    }

    obtenerDatosCliente() {
        this.servicio.get('clientes?id_usuario=' + this.usuario.id).subscribe(
            respuesta => {
                this.cliente = respuesta[0];
                this.obtenerVehiculos();
                this.obtenerMantenimientos();
            }
        );
    }

    obtenerVehiculos() {
        this.servicio.get('clientes/vehiculos?id_cliente=' + this.cliente.id).subscribe(
            respuesta => {
                this.vehiculos = respuesta as Array<Vehiculo>;
            }
        );
    }

    obtenerServicios() {
        this.servicio.get('servicios').subscribe(
            respuesta => {
                this.servs = respuesta as Array<Servicio>;
            }
        );
    }

    actualizarMantenimiento() {
        this.servicio.put('servicios', this.serv).subscribe(
            respuesta => {
                alert('actualizado');
                this.obtenerServicios();

            }
        );
    }


    registrarMantenimiento() {
        this.mantenimiento.id_cliente = this.cliente.id;
        this.servicio.post('mantenimientos', this.mantenimiento).subscribe(
            respuesta => {
                this.obtenerMantenimientos();
                alert('registrado');
            }
        );
    }

    seleccionarServicio() {
        this.servs.forEach(value => {
            console.log('valeu' + value);
            console.log('serve' + this.serv);
            if (value.nombre == this.serv.nombre) {
                this.serv = value;
                this.mantenimiento.id_servicio = value.id;
            }
        });
    }

    seleccionarVehiculo() {
        this.vehiculos.forEach(value => {
            if (value.placas == this.vehiculo.placas) {
                this.vehiculo = value;
                this.mantenimiento.id_vehiculo = value.id;
            }

        });


    }

    eliminarMantenimiento(mantenimiento: Mantenimiento) {
        this.servicio.delete('mantenimientos?id=' + mantenimiento.id).subscribe(
            respuesta => {
                alert('eliminado');
                this.obtenerMantenimientos();

            }
        );
    }

    obtenerMantenimientos() {
        this.servicio.get('mantenimientos/clientes?id_cliente=' + this.cliente.id).subscribe(
            respuesta => {
                this.mantenimientos = respuesta as Array<Mantenimiento>;

            }
        );
    }

}
