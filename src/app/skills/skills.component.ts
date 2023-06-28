import { Component } from '@angular/core';
import { Persona } from '../Modelo/persona';
import { PersonaService } from '../Service/persona.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
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
