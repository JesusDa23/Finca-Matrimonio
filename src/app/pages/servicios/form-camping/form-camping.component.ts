import { Component, Input, viewChild } from '@angular/core';
import { DataCampingService } from './services/data-camping.service';
import { CompartirSaldoService } from './services/compartirSaldo.service';

@Component({
  selector: 'app-form-camping',
  templateUrl: './form-camping.component.html',
  styleUrl: './form-camping.component.css'
})
export class FormCampingComponent {
  total:any = 0
  totalPagar: any = 0



  mostrarMenuActivo: boolean = false;
  menuVisible: boolean = false;

  datosCamping:any;
  data:any;

  campingParejas: number = 0
  campingFamiliar: number = 0
  opcionSeleccionada: any;


  constructor(
    private datosDelServicio:DataCampingService,
    private enviarPedidoCampingService: DataCampingService

  ){}

  ngOnInit(){
     this.datosDelServicio.obtenerDatos().subscribe(data => {
      this.datosCamping = data
      this.data = this.datosCamping.data
      this.campingParejas = this.datosCamping.data[0].precio
      this.campingFamiliar = this.datosCamping.data[1].precio


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


  sumar( totalRestaurante: any ) {
    this.total = totalRestaurante
  }




  mostrarPrecioPareja(i: any) {
    if (i === 0) {
      this.totalPagar = this.total + this.campingParejas;
      this.opcionSeleccionada = 'Camping para Parejas'; // Guardar opción seleccionada
    } else {
      this.totalPagar = this.total + this.campingFamiliar;
      this.opcionSeleccionada = 'Camping Familiar'; // Guardar opción seleccionada
    }
  }


  enviarPedidoCamping(){

    const pedidocampingPareja = {
      productos: this.data[0],
      total: this.totalPagar
    }

    const pedidocampingFamiliar = [{
      productos: this.data[1],
      total: this.totalPagar
    }]

    if(this.opcionSeleccionada === 'Camping para Parejas'){
      this.enviarPedidoCampingService.envioPedidoCamping(pedidocampingPareja).subscribe(data =>{}
      )

    }
    else if(this.opcionSeleccionada === 'Camping Familiar'){
      this.enviarPedidoCampingService.envioPedidoCamping(pedidocampingFamiliar).subscribe(data => {})
    }
  }
}

