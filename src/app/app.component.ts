import { Component } from '@angular/core';
import { Persona } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Persons List';

  persons: Persona[] = [ 
    new Persona('Luis','Lopez'), 
    new Persona('Laura','Gomez') 
  ];
  
  personaAgregada(persona:Persona){
    this.persons.push(persona)
  }
  
}




