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
    this.dataPedido = undefined
   this.consultaService.obtenerPedidosCliente(this.numeroIdentificacion.get('cedula')?.value).subscribe(data => {

    this.dataPedido = data


    this.consultaService.setClient(this.dataPedido.data.cliente)
    this.consultaService.setProductsData(this.dataPedido.data.productos)

    console.log(this.dataPedido)
    this.router.navigate(['/mostrar'])
    localStorage.setItem(this.numeroIdentificacion.get('cedula')?.value, 'cedula')



  })
}
}
