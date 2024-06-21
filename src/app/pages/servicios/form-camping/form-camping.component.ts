import { Component } from '@angular/core';
import { DataCampingService } from './services/data-camping.service';

@Component({
  selector: 'app-form-camping',
  templateUrl: './form-camping.component.html',
  styleUrl: './form-camping.component.css'
})
export class FormCampingComponent {

  mostrarMenuActivo: boolean = false;
  menuVisible: boolean = false;

  datosCamping:any;
  data:any;

  constructor(private datosDelServicio:DataCampingService){}

  ngOnInit(){
     this.datosDelServicio.obtenerDatos().subscribe(data => {
      this.datosCamping = data
      this.data = this.datosCamping.data

    })
  }
  
  mostrarMenu() {
    this.menuVisible = true;
    this.mostrarMenuActivo = true;
  }

  ocultarMenu() {
    this.menuVisible = false;
    this.mostrarMenuActivo = false;
  }
}
