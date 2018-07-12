import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/cliente.service';
import { Cliente } from '../model/cliente.model';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  constructor(private clientesService: ClienteService) { }
  clientes: Array<Cliente>;
  username: string = this.clientesService.username;

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }

}
