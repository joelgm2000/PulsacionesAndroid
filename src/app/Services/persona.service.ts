import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';
import { Persona } from '../Modelo/persona';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})



export class PersonaService {


  bassePath="/PulsacionesApi";


  url: string = "https://pulsacionapi.azurewebsites.net";


  constructor(private http: HttpClient) { }

  
  getAll(){
    const path = "https://pulsacionapi.azurewebsites.net/api/Pulsaciones";
    return this.http.get<Persona[]>(path);
  }

  getTask(id: string) {
    const path = `https://pulsacionapi.azurewebsites.net/api/Pulsaciones/${id}`;
    return this.http.get<Persona>(path);
  }

  createTask(task: Task) {
    const path = "https://pulsacionapi.azurewebsites.net/api/Pulsaciones";
    return this.http.post(path, task);
  }

  updateTask(persona: Persona) {
    const path = `https://pulsacionapi.azurewebsites.net/api/Pulsaciones/${persona.identificacion}`;
    return this.http.put<Persona>(path, persona);
  }

  deleteTask(id: string) {
    const path = `https://pulsacionapi.azurewebsites.net/api/Pulsaciones/${id}`;
    return this.http.delete(path);
  }




}
