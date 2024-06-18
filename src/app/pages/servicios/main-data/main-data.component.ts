import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsertarReservaService } from '../Services/insertar-reserva.service';
import { CardServiceComponent } from '../card-service/card-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrl: './main-data.component.css'
})
export class MainDataComponent {

  constructor(
    private formBuilder: FormBuilder,
    private reservaService: InsertarReservaService,
    private cardService: CardServiceComponent,
    private router: Router
  ){}

  mainData: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    cedula: ['', [Validators.required]],
    email: ['', [Validators.required]],
    fechaReserva: ['', [Validators.required]],
    horaLLegada: ['', [Validators.required]],
    // tipoServicio: ['', [Validators.required]],
    cantidadPersonas: ['', [Validators.required, Validators.min(1)]],
    // estado: ['', [Validators.required]]
  })
  
  enviarReserva (): void {
    if(this.mainData.valid){
      this.reservaService.insertarReserva(this.mainData.value).subscribe( response => {
        console.log(response)
        this.mostrarOtroForm()
      })

    }
  }


  mostrarOtroForm(): void {
    const selectedServiceId = this.reservaService.getSelectedServiceId()

    if (selectedServiceId !== null) {
      switch (selectedServiceId) {
        case 1:
          this.router.navigate(['/restaurante']);
          break;
        case 2:
          this.router.navigate(['/eventos']);
          break;
        case 3:
          this.router.navigate(['/camping']);
          break;
        default:
          console.log('Service ID no coincide con 1, 2 o 3');
          break;
      }
    } else {
      console.log('No se ha seleccionado ningún servicio');
    }
  }
 }