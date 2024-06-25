import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent {
  @Input() title!: string
  @Input() image!: string
  @Input() description!: string
}
