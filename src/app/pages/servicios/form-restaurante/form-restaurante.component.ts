import { Component } from '@angular/core';
import { ObtenerMenuService } from '../Services/obtener-menu.service';

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


  incrementar(index:number) {
    this.menu[index].cantidad++
  }

  decrementar(index: number){
    if (this.menu[index].cantidad > 0) {
      this.menu[index].cantidad--;
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
        console.log('Datos guardados correctamente:', response);
      },
      (error) => {
        console.error('Error al guardar los datos:', error);
      }
    );
  }
}