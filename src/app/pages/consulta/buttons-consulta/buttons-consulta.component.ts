import { Component } from '@angular/core';
import { CompartiCedulaService } from '../../servicios/Services/compartirCedula.service';
import { BotonesConsultaService } from '../services/botones-consulta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buttons-consulta',
  templateUrl: './buttons-consulta.component.html',
  styleUrl: './buttons-consulta.component.css'
})
export class ButtonsConsultaComponent {

  cedula: any = localStorage.getItem('cedula')
  
  constructor(private obtenerCedula: CompartiCedulaService, private cancelarService: BotonesConsultaService) {}

  cancelarReserva() {
    this.cancelarService.cancelarReserva(this.cedula).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: '¡Reserva Cancelada!',
          text: 'Su reserva ha sido cancelada correctamente.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        });
        localStorage.removeItem('cedula')
      },
      (error) => {
        console.error('Error al cancelar la reserva:', error);
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Hubo un problema al cancelar la reserva.',
          confirmButtonColor: '#d33',
          confirmButtonText: 'Cerrar'
        });
      }
    );
  }

}
