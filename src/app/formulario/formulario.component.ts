import { Component, EventEmitter, Output } from '@angular/core';
import { LogginService } from '../LogginService.service';
import { Persona } from '../person.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output()personaCreada = new EventEmitter<Persona>();
  
  constructor(private LogginService:LogginService){}

  nombreInput:string = '';

  apellidoInput:string = '';

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
   this.LogginService.enviaMensajeAConsola(`Enviamos a : ${persona1.nombre} Apellido : ${persona1.apellido}`);
    //this.persons.push(persona1);
    this.personaCreada.emit(persona1)
  }

}
