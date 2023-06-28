import { Habilidad } from "./habilidad";
import { Proyecto } from "./proyecto";
import { Experiencia } from "./experiencia";

export class Persona{
    id?: number;
    nombre?: String;
    apellido?: String;
    email?:String;
    titulo?:String;
    telefono?:number;
    imagen?:String;
    habilidades?: Habilidad[];
    proyectos?: Proyecto[];
    experiencias?: Experiencia[];
    
}