import { Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  navLinks = [
    { path: 'exchange', label: 'REALIZAR CAMBIO' },
    { path: 'list', label: 'LISTADO DE MONEDAS' },
  ];
}


