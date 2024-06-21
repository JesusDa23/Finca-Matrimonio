import { Component } from '@angular/core';

@Component({
  selector: 'app-form-camping',
  templateUrl: './form-camping.component.html',
  styleUrl: './form-camping.component.css'
})
export class FormCampingComponent {
  mostrarMenuActivo: boolean = false;
  menuVisible: boolean = false;

  mostrarMenu() {
    this.menuVisible = true;
    this.mostrarMenuActivo = true;
  }

  ocultarMenu() {
    this.menuVisible = false;
    this.mostrarMenuActivo = false;
  }
}
