import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CafeService } from '../services/cafe.service';

@Component({
  selector: 'app-main-cafe',
  templateUrl: './main-cafe.component.html',
  styleUrl: './main-cafe.component.css'
})

export class MainCafeComponent {

  cafes: any;

  constructor(private router: Router, private cafeService: CafeService){}

  ngOnInit(){
    this.cafeService.obtenerCafe().subscribe( data => {
      this.cafes = data

    })
  }

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
