import { Component } from '@angular/core';
import { ObtenerMenuService } from '../Services/obtener-menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-restaurante',
  templateUrl: './form-restaurante.component.html',
  styleUrl: './form-restaurante.component.css'
})
export class FormRestauranteComponent {

  menu: any[] = [];
  platos: any[] = [];
  bebidas: any[] = [];

  /** Inyectar una dependencia (hacerla disponible) usando el constructor de la clase del componente */
  constructor( private MenuService: ObtenerMenuService ) {}


  ngOnInit() {
    /** Ejecuta el servicio disponible para obtener los datos */
    this.MenuService.getMenu().subscribe( ( data ) => {
      console.log(data);
      this.menu = data.data.map((plato:any) => ({...plato,
        cantidad: 0 }))
      
      // Filtrar platos y bebidas
      this.platos = this.menu.filter(item => item.type === 'plato');
      this.bebidas = this.menu.filter(item => item.type === 'bebida');
    });
  }


  incrementar(index: number) {
    if (index < this.platos.length) {
        // Incrementar cantidad del plato
        this.platos[index].cantidad++;
    } else {
        // Incrementar cantidad de la bebida
        const bebidaIndex = index - this.platos.length;
        this.bebidas[bebidaIndex].cantidad++;
    }
}

  decrementar(index: number) {
    if (index < this.platos.length) {
        // Decrementar cantidad del plato
        if (this.platos[index].cantidad > 0) {
            this.platos[index].cantidad--;
        }
    } else {
        // Decrementar cantidad de la bebida
        const bebidaIndex = index - this.platos.length;
        if (this.bebidas[bebidaIndex].cantidad > 0) {
            this.bebidas[bebidaIndex].cantidad--;
        }
    }
}


  sumarPrecios() {
    let total = 0;

    // Sumar precios de platos
    total += this.platos.reduce((acc, plato) => acc + (plato.price * plato.cantidad), 0);
  
    // Sumar precios de bebidas
    total += this.bebidas.reduce((acc, bebida) => acc + (bebida.price * bebida.cantidad), 0);
  
    return total;
  }



  guardarSeleccion() {
    const productosSeleccionados = [
      ...this.platos.filter(plato => plato.cantidad > 0).map(plato => ({
        name: plato.name,
        price: plato.price,
        cantidad: plato.cantidad
      })),
      ...this.bebidas.filter(bebida => bebida.cantidad > 0).map(bebida => ({
        name: bebida.name,
        price: bebida.price,
        cantidad: bebida.cantidad
      }))
    ];

    const seleccion = {
      productos: productosSeleccionados,
      total: this.sumarPrecios()
    };

    this.MenuService.guardarSeleccion(seleccion).subscribe(
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
}