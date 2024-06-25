import { Component, Input, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultarPedidoService } from './services/consultar-pedido.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {
  
  dataPedido:any;
 
  constructor(private formBuilder: FormBuilder, private consultaService: ConsultarPedidoService,private router: Router){}

  numeroIdentificacion: FormGroup = this.formBuilder.group({
    cedula: ['', [Validators.required]],
  })
  
  enviarConsulta(){

  localStorage.setItem('cedula', this.numeroIdentificacion.value.cedula )

  this.consultaService.obtenerDatosCliente(this.numeroIdentificacion.get('cedula')?.value).subscribe(dataCliente => {

    if (dataCliente.data !== null){
      this.consultaService.setCliente(dataCliente.data)
      this.consultaService.obtenerDatosReserva(this.numeroIdentificacion.get('cedula')?.value).subscribe(dataReserva => {
        this.consultaService.setReserva(dataReserva.data)
      })
    
      this.consultaService.obtenerDatosPedidos(this.numeroIdentificacion.get('cedula')?.value).subscribe(dataPedido => {
        this.consultaService.setPedido(dataPedido.data)
        this.router.navigate(['/mostrar'])
      })
    
    }else {
      Swal.fire({
        icon: 'info',
        title: 'No tiene reservas disponibles',
        html: '¿Desea realizar una nueva reserva? <a href="/servicios" class="alert-link">Click aquí</a>',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',})
    }
  })





}


}
