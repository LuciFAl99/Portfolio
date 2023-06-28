import { Component, OnInit } from '@angular/core';
import { Persona } from '../Modelo/persona';
import { PersonaService } from '../Service/persona.service';
import { Experiencia } from '../Modelo/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
    persona: Persona = {};
    experienciaSeleccionada: Experiencia | undefined;
  
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
    openModalExperiencia(modalId: string, experiencia: Experiencia) {
      this.experienciaSeleccionada = experiencia;
    }
}
