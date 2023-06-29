import { Component, OnInit } from '@angular/core';
import { Persona } from '../Modelo/persona';
import { PersonaService } from '../Service/persona.service';
import { Educacion } from '../Modelo/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  persona: Persona = {};
  educacionSeleccionada: Educacion | undefined;

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
  openModalEducacion(modalId: string, educacion: Educacion) {
    this.educacionSeleccionada = educacion;
  }
}
