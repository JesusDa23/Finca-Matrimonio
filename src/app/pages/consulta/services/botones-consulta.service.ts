import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotonesConsultaService {
    baseUrl = 'http://localhost:4000/api/pedidos';

    constructor(private http: HttpClient) {}
  
    cancelarReserva(cedula: any): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${cedula}`);
    }
}