import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  weekly = [
    { title: 'prueba1', img: '/assets/portada.jpg' },
    { title: 'prueba2', img: '/assets/1.jpg' },
    { title: 'prueba3', img: '/assets/2.jpg' },
    { title: 'prueba4', img: '/assets/3.jpg' }
  ];
}
