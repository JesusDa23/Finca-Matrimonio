import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertarReservaService {

  baseUrl = 'http://localhost:4000/api';
  private selectedServiceId: number | null = null;

  constructor(private http: HttpClient) { }

  insertarReserva(nuevaReserva:any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/reservas`, nuevaReserva)
  }

  setSelectedServiceId(id: number): void {
    this.selectedServiceId = id;
  }

  getSelectedServiceId(): number | null {
    return this.selectedServiceId;
  }


}
