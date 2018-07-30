import { Injectable } from '@angular/core';

// Importaciones
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

// Se importa el servicio y se pasa por el constructor
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

  // Implementar una función que devuelva true o false

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Esta función debe regresar true o false

    if (this.authService.isAuthenticated()) {
      console.log('Pasó el Guard');
      return true;
    }
    else {
      console.error('Bloqueado por el Guard');
      return false;
    }

  }

}
