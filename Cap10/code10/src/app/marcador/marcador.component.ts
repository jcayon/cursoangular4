import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  jugadores: object[] = [
    { nombre: 'Isaiah Thomas', puntos: 0, imagen: 'assets/img/thomas.png' },
    { nombre: 'Kyle Kuzma', puntos: 0, imagen: 'assets/img/kuzma.png' },
    { nombre: 'Julius Randle', puntos: 0, imagen: 'assets/img/randle.png' },
    { nombre: 'Brandom Ingram', puntos: 0, imagen: 'assets/img/ingram.png' },
    { nombre: 'Brook López', puntos: 0, imagen: 'assets/img/lopez.png' },
  ];
  puntosEquipo = 0;

  constructor() { }

  ngOnInit() {
  }

  getCanasta(event) {
    this.puntosEquipo += event.puntos;
  }

}
