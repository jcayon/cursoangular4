import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit, OnDestroy {

  pings: Subscription;

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.pings = this.servicioService.getPings().subscribe(
      (data: string) => {console.log(data)},
      (error) => {console.log(error)},
      () => {console.log('Proceso completado')},
    );
  }

  ngOnDestroy(): void {
    this.pings.unsubscribe();
  }
}
