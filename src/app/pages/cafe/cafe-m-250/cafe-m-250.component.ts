import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cafe-m-250',
  templateUrl: './cafe-m-250.component.html',
  styleUrl: './cafe-m-250.component.css'
})
export class CafeM250Component {
  constructor(private router: Router){}

  dataCard = {
    title: 'Café molido',
    description: 'Cada lote de café "El Matrimonio" es cuidadosamente tostado El resultado es un café molido de 250 gramos con un sabor excepcional y una frescura incomparable.',
    urlImage: '../../../../assets/imagenes/cafe6.jpeg'
  }
  
  cafe = [
    {
      title: 'Café molido 250 GR', 
      img: '/assets/imagenes/molido-250gr.jpeg', 
      description: "$15.000",
      // description:'Descubre la esencia pura del café en cada taza. Nuestro café molido de 250 gramos es una experiencia gastronómica única que te transportará a los campos de cultivo de El Matrimonio', 
      btnText: 'Comprar'
    },
    {
      title: 'Café molido 500 GR', 
      img: '/assets/imagenes/molido-500gr.jpeg', 
      // description: 'Sumérgete en una experiencia inigualable con nuestro café molido de 500 gramos. Cada grano, meticulosamente seleccionado, lleva consigo la esencia de los campos de cultivo de El Matrimonio', 
      description: "$25.000",
      btnText: 'Comprar'
    },
    {
      title: 'Café en grano 500 GR', 
      img: '/assets/imagenes/grano-500gr.jpeg', 
      // description: 'El café en grano de 500 gramos es una joya para los amantes del café. Cada grano alberga la esencia de los campos de cultivo, desde la altitud hasta el clima. ¡Vive el encanto de El Matrimonio!', 
      description: "$25.000",
      btnText: 'Comprar'
    }
  ]

  navegarRutas(i:number){
    if( i === 0){
      this.router.navigate(['/cafe250'])
    }
    else if( i === 1){
      this.router.navigate(['/cafe500'])
    }
    else if ( i === 2){
      this.router.navigate(['/cafe501'])
    }
    else {
      console.log('no hay mas cards')
    }
  }
}
