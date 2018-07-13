import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';

const rutas: Routes = [
  {path: 'a', component: ComponenteAComponent},
  {path: 'b', component: ComponenteBComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ComponenteAComponent,
    ComponenteBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
