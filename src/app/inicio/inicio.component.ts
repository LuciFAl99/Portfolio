import { Component, OnInit } from '@angular/core';
import { Persona } from '../Modelo/persona';
import { PersonaService } from '../Service/persona.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  persona!: Persona

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    const personaId = 1;
    this.personaService.getPersona(personaId).subscribe(
      persona => {
        this.persona = persona;
        console.log(this.persona); 
      }
    );
  }  
  
}


