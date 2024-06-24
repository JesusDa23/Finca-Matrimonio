import { Component, ViewChild } from '@angular/core';
import { FormRestauranteComponent } from '../form-restaurante/form-restaurante.component';
import { EntradasComponent } from '../form-restaurante/entradas/entradas.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-eventos',
  templateUrl: './form-eventos.component.html',
  styleUrl: './form-eventos.component.css'
})
export class FormEventosComponent {
  totalComida: number = 0;
  totalEntradas: number = 0;
  productosSeleccionados: any[] = []; // Array para almacenar todos los productos seleccionados

  constructor(private router: Router) {
    
  }

  @ViewChild(FormRestauranteComponent) formRestaurante!: FormRestauranteComponent;
  @ViewChild(EntradasComponent) entradasComponent!: EntradasComponent;

  actualizarTotalComida(total: number) {
    this.totalComida = total;
    this.actualizarProductosSeleccionados();
  }

  recibirEntradas(infoEntradas: { productos: any[], total: number }) {
    this.totalEntradas = infoEntradas.total;
    this.actualizarProductosSeleccionados();
  }

  actualizarProductosSeleccionados() {
    const productosRestaurante = this.formRestaurante.obtenerProductosSeleccionados();
    const productosEntradas = this.entradasComponent.obtenerProductosSeleccionados();
    this.productosSeleccionados = [...productosRestaurante, ...productosEntradas];
  }

  calcularTotal() {
    return this.totalComida + this.totalEntradas;
  }

  onPagar() {
    if (this.productosSeleccionados.length === 0) {
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Debe seleccionar al menos un producto antes de pagar.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Cerrar'
      });
      return;
    }

    this.formRestaurante.guardarSeleccion(this.productosSeleccionados);

    Swal.fire({
      title: 'Pago exitoso',
      text: 'Su pago ha sido procesado correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
    this.router.navigate(['/servicios'])
  }


  onFormSubmit(event: Event) {
    event.preventDefault();
  }

  }
