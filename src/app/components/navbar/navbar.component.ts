import { Component } from '@angular/core';

// Se importa el servicio de Auth0
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(private authService: AuthService) {
     authService.handleAuthentication();
  }

  // Método que va a llamar al método login del servicio
  login() {
    this.authService.login();
  }

   // Método que va a llamar al método logout del servicio
  logout() {
    this.authService.logout();
  }

}
