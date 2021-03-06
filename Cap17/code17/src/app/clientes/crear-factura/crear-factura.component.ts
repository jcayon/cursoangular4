import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CifValidator } from '../../Validators/cif.validator';
import { FacturasService } from '../../servicios/facturas.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  formFactura: FormGroup;
  currentDate = new Date();
  day = this.currentDate.getDate();
  month = this.currentDate.getMonth() + 1;
  year = this.currentDate.getFullYear();
  facturas:any;

  constructor(private facturasService: FacturasService) { }

  ngOnInit() {
    this.formFactura = new FormGroup({
      cliente: new FormControl('', [Validators.required, Validators.minLength(4)]),
      cif: new FormControl('', [Validators.required, CifValidator.checkCIF]),
      fecha: new FormControl(this.year + "-" + this.month + "-" + this.day),
      base: new FormControl(0),
      datosIVA: new FormGroup({
        tipo: new FormControl(0.21),
        iva: new FormControl(0)
      }),
      total: new FormControl(0)
    });
    this.cambios();
  }

  cambios = () => {
    this.formFactura.get('base').valueChanges.subscribe(this.calculo);
    this.formFactura.get('datosIVA.tipo').valueChanges.subscribe(this.calculo);
  }

  calculo = () => {
    this.formFactura.get('datosIVA.iva').setValue(this.formFactura.get('base').value * this.formFactura.get('datosIVA.tipo').value, {emitEvent: false});
    this.formFactura.get('total').setValue(this.formFactura.get('base').value + this.formFactura.get('datosIVA.iva').value, {emitEvent: false});
  }

  crearFactura() {
    const factura = {
      razonSocial: this.formFactura.get('cliente').value,
      cif: this.formFactura.get('cif').value,
      fecha: this.formFactura.get('fecha').value,
      base: this.formFactura.get('base').value,
      tipo: this.formFactura.get('datosIVA.tipo').value,
      importeIVA: this.formFactura.get('datosIVA.iva').value,
      total: this.formFactura.get('total').value
    }

    this.facturasService.postFactura(factura).subscribe(
      (resp: any) => {
        console.log(resp);
      }, (error) => {
        console.log(error);
      }
    )
  }

}
