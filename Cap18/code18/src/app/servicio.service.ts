import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  getMensajes(): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("Primer mensaje");
      }, 1000);
      setTimeout(() => {
        observer.next("Segundo mensaje");
      }, 2000);
      setTimeout(() => {
        observer.error("Mensaje de error");
      }, 3000);
      setTimeout(() => {
        observer.next("Tercer mensaje");
      }, 4000);
    });
  }

  getPings(): Observable<any> {
    return Observable.create((observer: Observer<string>) => {
      setInterval(() => {
        observer.next('Ping');
      }, 1000)
    });
  }
}
