import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultarPedidoService {
  
  baseUrl = 'http://localhost:4000/api/pedidos'
  cedula = 0
  data:any;
  allProducts: any;
    
  constructor(private http: HttpClient) {
   }

  obtenerPedidosCliente(cedula:string){
    return this.http.get(`${this.baseUrl}/${cedula}`)
   }

  setClient(data: any){
    this.data = data
  }

  setProductsData(alldataProducto: any){
    this.allProducts = alldataProducto
  }



  getData():any{
    return this.data
  }

  getAllProducts():any{
    return this.allProducts
  }

  
}
