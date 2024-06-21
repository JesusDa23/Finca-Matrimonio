import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ObtenerMenuService } from '../Services/obtener-menu.service';
import Swal from 'sweetalert2';
import { EntradasService } from './entradas/services/entradas.service';
import { EntradasComponent } from './entradas/entradas.component';
import { CompartiCedulaService } from '../Services/compartirCedula.service';

@Component({
  selector: 'app-form-restaurante',
  templateUrl: './form-restaurante.component.html',
  styleUrl: './form-restaurante.component.css'
})
export class FormRestauranteComponent {
  menu: any[] = [];
  platos: any[] = [];
  bebidas: any[] = [];
  entradasSeleccionadas: any[] = []; // Arreglo para almacenar las entradas seleccionadas

  @Output() actualizarTotal = new EventEmitter<number>(); // Evento para actualizar el total
  @ViewChild(EntradasComponent) entradasComponent!: EntradasComponent;

  constructor(private obtenerMenuService: ObtenerMenuService, private sharedDataService: CompartiCedulaService) {}

  ngOnInit() {
    this.obtenerMenuService.getMenu().subscribe((data) => {
      this.menu = data.data.map((plato: any) => ({ ...plato, cantidad: 0 }));
      this.platos = this.menu.filter(item => item.type === 'plato');
      this.bebidas = this.menu.filter(item => item.type === 'bebida');
    });
  }

  incrementar(index: number) {
    if (index < this.platos.length) {
      this.platos[index].cantidad++;
    } else if (index < this.platos.length + this.bebidas.length) {
      const bebidaIndex = index - this.platos.length;
      this.bebidas[bebidaIndex].cantidad++;
    }
    this.actualizarTotal.emit(this.sumarPrecios());
  }
  
  decrementar(index: number) {
    if (index < this.platos.length) {
      if (this.platos[index].cantidad > 0) {
        this.platos[index].cantidad--;
      }
    } else if (index < this.platos.length + this.bebidas.length) {
      const bebidaIndex = index - this.platos.length;
      if (this.bebidas[bebidaIndex].cantidad > 0) {
        this.bebidas[bebidaIndex].cantidad--;
      }
    }
    this.actualizarTotal.emit(this.sumarPrecios());
  }

  sumarPrecios() {
    let total = 0;
    total += this.platos.reduce((acc, plato) => acc + (plato.price * plato.cantidad), 0);
    total += this.bebidas.reduce((acc, bebida) => acc + (bebida.price * bebida.cantidad), 0);
    total += this.entradasSeleccionadas.reduce((acc, entrada) => acc + (entrada.price * entrada.cantidad), 0); // Sumar también las entradas seleccionadas
    return total;
  }

  guardarSeleccion(productosSeleccionados: any[]) {
    const cedulaReserva = this.sharedDataService.getCedula();
    const nombreReserva = this.sharedDataService.getName();
    const telefonoReserva = this.sharedDataService.getTelefono();
    const cantidad = this.sharedDataService.getCantidad();
    const fechaReserva = this.sharedDataService.getFecha();
    const horaLlegada = this.sharedDataService.getHora();
    const emailCliente = this.sharedDataService.getEmail();
    // Guardar la selección con los productos seleccionados recibidos como argumento
    
    const cliente = [{
      cedula: cedulaReserva,
      nombre: nombreReserva,
      telefono: telefonoReserva,
      cantidadPersonas: cantidad,
      fechaReserva: fechaReserva,
      horaLlegada: horaLlegada,
      email: emailCliente
    }]

    const seleccion = {
      productos: productosSeleccionados,
      total: this.sumarPrecios(),
      cliente: cliente
    };



    this.obtenerMenuService.guardarSeleccion(seleccion).subscribe(
      (response) => {
          Swal.fire({
            icon: 'success',
            title: '¡Reserva Exitosa!',
            text: 'Su reserva ha sido guardada correctamente.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          });
      },
      (error) => {
        console.error('Error al guardar los datos:', error);
          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Hubo un problema al guardar la reserva.',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Cerrar'
          });
      }
    );
  }

  obtenerProductosSeleccionados() {
    return [
      ...this.platos.filter(plato => plato.cantidad > 0).map(plato => ({
        name: plato.name,
        price: plato.price,
        cantidad: plato.cantidad,
        type: 'plato'
      })),
      ...this.bebidas.filter(bebida => bebida.cantidad > 0).map(bebida => ({
        name: bebida.name,
        price: bebida.price,
        cantidad: bebida.cantidad,
        type: 'bebida'
      })),
      ...this.entradasSeleccionadas
    ];
  }

  onPagar() {
    // Obtener productos seleccionados del restaurante
    const productosRestaurante = this.obtenerProductosSeleccionados();
    // Obtener productos seleccionados de las entradas
    const productosEntradas = this.entradasComponent.obtenerProductosSeleccionados();
    // Combinar ambos arreglos de productos
    const productosSeleccionados = [...productosRestaurante, ...productosEntradas];

    // Guardar la selección
    this.guardarSeleccion(productosSeleccionados, );
  }
  
  onPagar2(){
    const productosRestaurante = this.obtenerProductosSeleccionados();
    const productosSeleccionados = [...productosRestaurante ];
    this.guardarSeleccion(productosSeleccionados)
  }

  // Método para recibir las entradas seleccionadas desde EntradasComponent
  recibirEntradasSeleccionadas(infoEntradas: any[]) {
    this.entradasSeleccionadas = infoEntradas;
    this.actualizarTotal.emit(this.sumarPrecios());
  }
}