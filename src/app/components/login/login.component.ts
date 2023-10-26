import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';

  constructor(private _adminService: AdminServiceService, private router: Router){

  }

  iniciarSesion() {
    this._adminService.login(this.usuario, this.contrasena).subscribe(
        (response: any) => {
          if (response.length > 0) {
            // Inicio de sesión exitoso
            Swal.fire({
              icon: 'success',
              title: 'Inicio de sesión exitoso',
              text: 'Bienvenido de vuelta ' + response[0].usuario
            }).then(() => {
              // Redirigir al usuario a otra página después del inicio de sesión exitoso
              this.router.navigate(['/listTicket']); // Reemplaza '/dashboard' con la ruta a la que deseas redirigir
            });
          } else {
            // Credenciales incorrectas
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Credenciales incorrectas, por favor inténtalo de nuevo'
            });
          }
        },
        (error) => {
          // Error en la solicitud
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error durante el inicio de sesión. Por favor, intenta de nuevo más tarde.'
          });
          console.error('Error en el inicio de sesión:', error);
        }
      );
    }
  }