import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {ServicioService} from '../servicio.service';
import {Usuario} from '../modelos/Usuario';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private servicio: ServicioService) {
    }

    usuario: Usuario;

    ngOnInit() {
        this.usuario = new Usuario();
    }

    onLoggedin() {
        this.servicio.post('usuarios/login', this.usuario)
            .subscribe(
                respuesta => {
                    if (respuesta[0] !== undefined) {
                        if (respuesta[0].rol === 2) {
                            console.log(respuesta[0].id);
                            localStorage.setItem('isLoggedin', 'true');
                            localStorage.setItem('usuario', JSON.stringify(respuesta[0]));
                            this.usuario = JSON.parse(localStorage.getItem('usuario')) as Usuario;
                            if (this.usuario.id_rol == 1) {
                                this.router.navigate(['mantenimientos']);
                            } else if (this.usuario.id_rol == 2){
                                this.router.navigate(['clientes']);
                            }

                        }
                    } else {
                        localStorage.setItem('isLoggedin', 'false');
                        alert('Usuario y/o Contraseña Incorrecto');
                    }

                },
                error => {

                    alert('error al registrar');
                }
            );
    }
}
