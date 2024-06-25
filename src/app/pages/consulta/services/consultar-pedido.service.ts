import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultarPedidoService {
  
  baseUrl = 'http://localhost:4000/api'

  
  datosDelCliente: any;
  datosDeReserva: any;
  datosDePedido: any
    
  constructor(private http: HttpClient) {
   }

  obtenerDatosCliente(cedula:string){
    return this.http.get<any>(`${this.baseUrl}/cliente/${cedula}`)
   }


  obtenerDatosReserva(cedula:string){
    return this.http.get<any>(`${this.baseUrl}/reservas/${cedula}`)
  }
    
  obtenerDatosPedidos(cedula:string){
    return this.http.get<any>(`${this.baseUrl}/pedidos/${cedula}`)
  }




   setCliente(datosCliente: any){ 
    this.datosDelCliente = datosCliente
   }

   getCliente(){
    return this.datosDelCliente
   }


   setReserva(datosReserva: any){ 
    this.datosDeReserva = datosReserva
   }

   getReserva(){
    return this.datosDeReserva
   }




   setPedido(datosPedido: any){ 
    this.datosDePedido = datosPedido
   }

   getPedido(){
    return this.datosDePedido
   }


  
}
