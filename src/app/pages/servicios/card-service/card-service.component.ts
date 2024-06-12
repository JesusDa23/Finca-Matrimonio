import { Component } from '@angular/core';

@Component({
  selector: 'app-card-service',
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css'
})
export class CardServiceComponent {

  services = [
    {
      title: 'Restaurante', 
      img: '/assets/imagenes/picada1.jpg', 
      description:'¡Sumérgete en una experiencia gastronómica única! Disfruta de nuestras deliciosas picadas, diseñadas para satisfacer los gustos más exigentes y deleitar tu paladar.', 
      btnText: 'Reservar'
    },
    {
      title: 'Eventos Especiales', 
      img: '/assets/imagenes/eventosEspeciales.jpeg', 
      description: '¡Haz que tu próximo evento sea inolvidable! Reserva ya con nosotros y disfruta de un servicio personalizado, espacios únicos y atención al detalle. ¡Tu evento especial merece lo mejor! ', 
      btnText: 'Reservar'
    },
    {
      title: 'Camping', 
      img: '/assets/imagenes/camping.jpeg', 
      description: '¡Escápate a la finca El Matrimonio! Disfruta de un refugio romántico con desayuno incluido y vistas impresionantes. ¡Vive el encanto de El Matrimonio!', 
      btnText: 'Reservar'
    }
  ]

}