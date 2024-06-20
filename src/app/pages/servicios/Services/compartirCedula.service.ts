import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CompartiCedulaService {

  private cedula: string = '';
  private nombre: string = ''
  private telefono: string = ''
  private cantidadPersonas: number = 0

  setCedula(cedula: string,) {
    this.cedula = cedula;
  }

  setName( nombre: string){
    this.nombre = nombre;
  }

  setTelefono( telefono: string){
    this.telefono = telefono;
  }

  setPersonas( cantidad: number){
    this.cantidadPersonas = cantidad
  }




  getCedula(): string {
    return this.cedula
  }

  getName(): string {
    return this.nombre;
  }

  getTelefono(): string {
    return this.telefono;
  }

  getCantidad(): number {
    return this.cantidadPersonas
  }

}
