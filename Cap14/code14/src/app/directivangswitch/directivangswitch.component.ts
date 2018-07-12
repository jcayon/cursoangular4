import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivangswitch',
  templateUrl: './directivangswitch.component.html',
  styleUrls: ['./directivangswitch.component.css']
})
export class DirectivangswitchComponent implements OnInit {

  jugadores = [
    {nombre: 'Kyle Kuzma', equipo: 'lakers'},
    {nombre: 'Aron Bynes', equipo: 'celtics'},
    {nombre: 'Justin Holiday', equipo: 'bulls'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
