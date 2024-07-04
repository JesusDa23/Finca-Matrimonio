import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CafeService } from '../services/cafe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cafe-detalle',
  templateUrl: './cafe-detalle.component.html',
  styleUrl: './cafe-detalle.component.css'
})

export class CafeDetalleComponent {
  cafe: any;
  cafes: any;
  resultado: any;

  constructor(
    private cafeService: CafeService,
    private activatedRoute: ActivatedRoute,

  ){}
  cantidad: number = 0;

sumarCantidad() {
  this.cantidad++;
  this.resultado = this.cafe.precio * this.cantidad 
}

restarCantidad() {
  if (this.cantidad > 0) {
    this.cantidad--; 
    this.resultado = this.cafe.precio * this.cantidad
  }
}

  ngOnInit(){

    this.activatedRoute.params.subscribe( ( data: any ) => {
      
      const id = data.id;
      console.log( id );

      this.cafeService.getCafeById( id ).subscribe( ( data: any ) => {
        console.log( data );

        this.cafe = data.data;
      })

      this.cafeService.obtenerCafe().subscribe( data => {
      this.cafes = data
        
      })
    })
  }

  mensajePagar(){
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
    
  }
  
}


