import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  rutas = [
    {
      name:'Inicio',
      path: '/home'
    },
    {
      name:'Servicio al Cliente',
      path: '/client-service'
    },
    {
      name: 'Contacto',
      path: '/contact'
    },
    {
      name: 'Sobre Nosotros',
      path: '/about'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
