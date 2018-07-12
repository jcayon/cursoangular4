import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivangif',
  templateUrl: './directivangif.component.html',
  styleUrls: ['./directivangif.component.css']
})
export class DirectivangifComponent implements OnInit {

  repositorio = "code14";
  repositorioCheck = false;
  capital: string;

  constructor() { }

  ngOnInit() {
  }


  setResultado() {
    return this.capital.toLocaleLowerCase() === 'santander' ? true : false;
  }
}
