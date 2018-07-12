import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Array<any> = [
    {id:1, nombre:'Iberdrola', cif: 'A11'},
    {id:2, nombre:'Vodafone', cif: 'A12'},
    {id:3, nombre:'Gas Natural', cif: 'A13'},
    {id:4, nombre:'Telefónica', cif: 'A14'},
  ]

  constructor() { }

  getClientes() {
    return this.clientes;
  }

  getCliente(id) {
    const clienteSel = this.clientes.find( cliente => { 
      return cliente.id == id;
    });
    return clienteSel;
  }
}
