import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes demo app';

  filterLabel = 'Filter';
  filterText = '';

  cars = [
    {name: 'Opel'},
    {name: 'Ford'},
    {name: 'JMC'},
    {name: 'Dodge'},
    {name: 'Dacia'},
    {name: 'Volkswagen'}
  ]

}
