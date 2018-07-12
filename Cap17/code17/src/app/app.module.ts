import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
