import { Component, Input } from '@angular/core';
import { ConsultarPedidoService } from '../services/consultar-pedido.service';

@Component({
  selector: 'app-mostrar-pedido',
  templateUrl: './mostrar-pedido.component.html',
  styleUrl: './mostrar-pedido.component.css'
})
export class MostrarPedidoComponent {

  constructor(private data: ConsultarPedidoService){}
  dataCliente:any;
  dataReserva:any;
  dataPedido: any;

  ngOnInit(){
    this.dataCliente = this.data.getCliente()
    this.dataReserva = this.data.getReserva()
    this.dataPedido = this.data.getPedido()
  }
}
