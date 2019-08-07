import {Component, OnInit} from '@angular/core';
import {ServicioService} from '../../servicio.service';
import {Usuario} from '../../modelos/Usuario';
import {Cliente} from '../../modelos/Cliente';
import {Vehiculo} from '../../modelos/Vehiculo';

@Component({
    selector: 'app-blank-page',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
    usuario: Usuario;
    cliente: Cliente;
    vehiculo: Vehiculo;
    vehiculos: Array<Vehiculo>;

    constructor(private servicio: ServicioService) {
    }

    ngOnInit() {
        this.usuario = JSON.parse(localStorage.getItem('usuario')) as Usuario;
        this.cliente = new Cliente();
        this.vehiculo = new Vehiculo();
        this.vehiculos = new Array<Vehiculo>();
        this.obtenerDatosCliente();

    }

    obtenerDatosCliente() {
        this.servicio.get('clientes?id_usuario=' + this.usuario.id).subscribe(
            respuesta => {
                this.cliente = respuesta[0];
                this.obtenerVehiculos();
            }
        );
    }

    actualizarDatosCliente() {
        this.servicio.put('clientes', this.cliente).subscribe(
            respuesta => {
                alert('actualizado');
                this.obtenerDatosCliente();

            }
        );
    }

    registrarVehiculo() {
        this.servicio.post('clientes/vehiculos?id_cliente=' + this.cliente.id, this.vehiculo).subscribe(
            respuesta => {
                alert('actualizado');
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

    seleccionarVehiculo() {
        console.log(this.vehiculo.placas);
        this.vehiculos.forEach(value => {
            if (value.placas == this.vehiculo.placas) {
                this.vehiculo = value;
            }
        });


    }
    actualizarVehiculo() {
        this.servicio.put('clientes/vehiculos?id=' + this.vehiculo.id, this.vehiculo).subscribe(
            respuesta => {
                alert('actualizado');
            }
        );
    }
}
