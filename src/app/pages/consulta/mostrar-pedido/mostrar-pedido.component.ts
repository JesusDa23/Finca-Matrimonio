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
  allProducts:any;

  

  ngOnInit(){
    this.dataCliente = this.data.getData()
    this.allProducts = this.data.getAllProducts()
    console.log(this.allProducts)
  }
}
