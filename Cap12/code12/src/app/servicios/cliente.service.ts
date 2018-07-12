import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Array<Cliente> = [
    { nombre: "Iberdrola", cif: "A12"}, 
    { nombre: "Gas Nagural", cif: "A13"},
    { nombre: "Vodafone", cif: "A14"}
  ];
  username: string = "Pedro";

  constructor() { }

  getClientes(): Array<Cliente> {
    return this.clientes;
  }

  postCliente(cliente: Cliente): Array<Cliente> {
    this.clientes.push(cliente);
    return this.clientes;
  }
}
