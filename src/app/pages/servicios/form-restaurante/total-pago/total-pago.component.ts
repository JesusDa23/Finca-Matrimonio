import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-total-pago',
  templateUrl: './total-pago.component.html',
  styleUrl: './total-pago.component.css'
})
export class TotalPagoComponent {
  @Input() total: number = 0;
  @Output() pagar = new EventEmitter<void>();

  onPagar() {
    this.pagar.emit();
  }
}
