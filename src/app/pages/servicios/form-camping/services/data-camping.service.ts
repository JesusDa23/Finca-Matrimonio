import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCampingService {
  constructor(private http:HttpClient) { }
  obtenerDatos(){
    return this.http.get('http://localhost:4000/api/camping')
  }

  envioPedidoCamping(dataCamping:any){
    this.http.post('http://localhost:4000/api/pedidocamping',dataCamping)
  }
}
