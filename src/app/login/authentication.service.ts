/*
import { User} from './user';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

;


@Injectable()
export class AuthenticationService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  realizarLogin(usuario: User){

    if (usuario.email === 'mpaulino@brq.com' &&
      usuario.password === 'a1235') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}*/
