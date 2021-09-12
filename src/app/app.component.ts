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
      { position: 20, name: 'calsio', weight: 40.078, symbol: 'ca' },
      { position: 21, name: 'escandio', weight: 44.955, symbol: 'sc' },
      { position: 22, name: 'titanio', weight: 47.867, symbol: 'ti' },
      { position: 23, name: 'vanadio', weight: 50.9415, symbol: 'v' },
      { position: 24, name: 'cromo', weight: 51.9961, symbol: 'cr' },

    ]
  }
}


