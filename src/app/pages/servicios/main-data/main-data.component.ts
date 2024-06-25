import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsertarReservaService } from '../Services/insertar-reserva.service';
import { CardServiceComponent } from '../card-service/card-service.component';
import { Router } from '@angular/router';
import { CompartiCedulaService } from '../Services/compartirCedula.service';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrl: './main-data.component.css'
})
export class MainDataComponent {


  constructor(
    private formBuilder: FormBuilder,
    private reservaService: InsertarReservaService,
    private router: Router,
    private sharedDataService: CompartiCedulaService
  ){
  }


  mainData: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    cedula: ['', [Validators.required]],
    email: ['', [Validators.required]],
    telefono: ['', [Validators.required]],

  })


  
  enviarReserva (): void {  
    
    if(this.mainData.valid  !== null ){
      // this.sharedDataService.setCedula(this.mainData.get('cedula')?.value); 
      // this.sharedDataService.setName(this.mainData.get('nombre')?.value);
      // this.sharedDataService.setTelefono(this.mainData.get('telefono')?.value);
      // this.sharedDataService.setPersonas(this.mainData.get('cantidadPersonas')?.value)
      // this.sharedDataService.setFecha(this.mainData.get('fechaReserva')?.value);
      // this.sharedDataService.setHora(this.mainData.get('horaLlegada')?.value)
      // this.sharedDataService.setEmail(this.mainData.get('email')?.value)

      this.reservaService.insertarCliente(this.mainData.value).subscribe( response => {
      })

    }
  }


 
 }