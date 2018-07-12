import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  texto = 'ciudad de Santander';
  id:any = 3;
  fecha = new Date();
  importe = 356979.123;
  aciertos = 0.0876;
  jugador = {
    nombre: "aaa",
    apellidos: "bbb"
  };
  cantidad = 1200.8972349780234;

  ngOnInit() {
    this.id = "000000" + this.id;
  }
}
