import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DatatableBootstrap';

  data: Array<any>;

  constructor() {
    this.data = [
      {cedula: 1070983062, nombre: 'Jorge Andres', apellidos: 'Duran Perez'},
      {cedula: 1018488967, nombre: 'Ingry Rossana', apellidos: 'Bastidas Alfonso'},

    ]
  }
}


