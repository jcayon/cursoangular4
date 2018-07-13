import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.servicioService.getMensajes().subscribe(
      (data: string) => {console.log(data)},
      (error) => {console.log(error)},
      () => {console.log('Proceso completado')},
    );
  }

}
