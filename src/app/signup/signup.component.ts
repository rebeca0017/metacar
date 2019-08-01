import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.animations';
import {ServicioService} from '../servicio.service';
import {Usuario} from '../modelos/Usuario';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private servicio: ServicioService, public router: Router) {
    }

    usuario: Usuario;
    confimacionClave: string;

    ngOnInit() {
        this.usuario = new Usuario();
    }

    registrarUsuario() {
        this.servicio.post('usuarios/clientes', this.usuario).subscribe(
            respuesta => {
                if (respuesta[0] !== undefined) {
                    if (respuesta[0].count === 1) {
                        alert('se registro');
                        this.router.navigate(['login']);
                    }
                } else {
                    alert('Error al registrar');
                }

            },
            error => {
                alert('error al registrar');
            }
        );
    }
}
