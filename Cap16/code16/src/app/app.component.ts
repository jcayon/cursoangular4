import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = {nombre: 'Pedro', rol: 'user'};
  title = 'app';

  ngOnInit() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
