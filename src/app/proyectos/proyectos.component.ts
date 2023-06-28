import { Component, OnInit } from '@angular/core';
import { Persona } from '../Modelo/persona';
import { PersonaService } from '../Service/persona.service';
import { Proyecto } from '../Modelo/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  persona: Persona = {};
  proyectoSeleccionado: Proyecto | undefined;

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
  openModal(modalId: string, proyecto: Proyecto) {
    this.proyectoSeleccionado = proyecto;
  
  }
}
