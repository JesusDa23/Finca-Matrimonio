import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CafeService } from '../services/cafe.service';

@Component({
  selector: 'app-cafe-m-250',
  templateUrl: './cafe-m-250.component.html',
  styleUrl: './cafe-m-250.component.css'
})
export class CafeM250Component {

  cafes: any;
  cafe250:any;
  constructor(private router: Router , private cafeService: CafeService){}

  ngOnInit(){
    this.cafeService.obtenerCafe().subscribe( data => {
      this.cafes = data
      this.cafe250 = this.cafes.data[0]
    })
  }

  // dataCard = {
  //   title:  'hola',
  //   description: 'Cada lote de café "El Matrimonio" es cuidadosamente tostado El resultado es un café molido de 250 gramos con un sabor excepcional y una frescura incomparable.',
  //   urlImage: '/assets/imagenes/molido-250gr.jpeg'
  // }
  
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
