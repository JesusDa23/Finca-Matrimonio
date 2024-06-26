import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CompartiCedulaService {

  private cedula: string = '';


  setCedula(cedula: string,) {
    this.cedula = cedula;
  }



  getCedula(): string {
    return this.cedula
  }




}
