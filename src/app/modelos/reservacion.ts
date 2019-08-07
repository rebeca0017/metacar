import {Mantenimiento} from './mantenimiento';

export class Reservacion {
    id: number;
    id_cliente: number;
    id_servicio: number;
    nombre_servicio: string;
    id_vehiculo: number;
    id_usuario: number;
    fecha: string;
    hora: string;
    nombre_cliente: string;
    apellido_cliente: string;
    placa_vehiculo: string;

    constructor() {

    }
}
