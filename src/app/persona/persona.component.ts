import { Component, Input } from '@angular/core';
import { Persona } from '../person.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() person: Persona;
  @Input() i:number;

}
