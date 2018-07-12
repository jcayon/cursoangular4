import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivangfor',
  templateUrl: './directivangfor.component.html',
  styleUrls: ['./directivangfor.component.css']
})
export class DirectivangforComponent implements OnInit {


  clientes = [
    { nombre: "Iberdrola", cif: "A12"}, 
    { nombre: "Gas Nagural", cif: "A13"},
    { nombre: "Vodafone", cif: "A14"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
