import {Component, OnInit} from '@angular/core';
import {ServicioService} from '../../servicio.service';
import {Usuario} from '../../modelos/Usuario';
import {Cliente} from '../../modelos/Cliente';
import {Vehiculo} from '../../modelos/Vehiculo';
import {Servicio} from '../../modelos/Servicio';

@Component({
    selector: 'app-servicio',
    templateUrl: './servicio.component.html',
    styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {
    serv: Servicio;
    servs: Array<Servicio>;

    constructor(private servicio: ServicioService) {
    }

    ngOnInit() {
        //this.usuario = JSON.parse(localStorage.getItem('usuario')) as Usuario;
        this.serv = new Servicio();
        this.servs = new Array<Servicio>();
        this.obtenerServicios();

    }

    obtenerServicios() {
        this.servicio.get('servicios').subscribe(
            respuesta => {
                this.servs = respuesta as Array<Servicio>;
            }
        );
    }

    actualizarServicio() {
        this.servicio.put('servicios', this.serv).subscribe(
            respuesta => {
                alert('actualizado');
                this.obtenerServicios();

            }
        );
    }


    registrarServicio() {
        this.servicio.post('servicios', this.serv).subscribe(
            respuesta => {
                this.obtenerServicios();
                alert('actualizado');
            }
        );
    }

    seleccionarServicio() {
        this.servs.forEach(value => {
            console.log('valeu' + value);
            console.log('serve' + this.serv);
            if (value.nombre == this.serv.nombre) {
                this.serv = value;
                //console.log(this.serv);
            }

        });


    }

    eliminarServicio() {
        this.servicio.delete('servicios?id=' + this.serv.id).subscribe(
            respuesta => {
                alert('eliminado');
                this.obtenerServicios();

            }
        );
    }


}
