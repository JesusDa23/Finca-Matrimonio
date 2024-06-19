import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  entradas: any[] = [];

  constructor() { }

  agregarEntrada(entrada: any) {
    this.entradas.push(entrada);
  }

  obtenerEntradas(): any[] {
    return this.entradas;
  }
}
