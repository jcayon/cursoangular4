import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  constructor(private clientesService: ClienteService) { }

  ngOnInit() {
  }

  setCliente() {
    this.clientesService.postCliente({nombre: 'Telefonica', cif: 'A16'});
  }

}
