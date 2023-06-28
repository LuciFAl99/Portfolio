import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'http://localhost:8080/api/personas';

  constructor(private http: HttpClient) { }

  public getPersona(id: number): Observable<Persona> {
    const url = `${this.URL}/${id}`;
    return this.http.get<Persona>(url);
  }
  
}
