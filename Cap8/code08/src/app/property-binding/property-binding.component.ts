import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  imagenes = ['assets/img/santander_aerea.jpg', 'assets/img/santander_anochecer.jpg']
  imagen = 0;

  constructor() {
    setTimeout(this.newTimeout, 2000);  
  }

  ngOnInit() {
  }

  newTimeout = () => {
    this.imagen = (this.imagen + 1) % 2;
    setTimeout(this.newTimeout, 2000);  
  };

}
