import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Task } from 'src/app/interfaces/task';
import { Persona } from 'src/app/Modelo/persona';
import { PersonaService } from 'src/app/Services/persona.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.scss'],
})
export class ListadoPersonasComponent implements OnInit {
  
  listadoPersona: Persona[] = [];

  constructor(private personaService:PersonaService) { }

  ngOnInit() {

    this.inicicalizar();

  }

  inicicalizar(){

  
    this.personaService.getAll().subscribe(result=>{
      
      this.listadoPersona=result;

      this.listadoPersona.forEach(element => {
        console.log(element.nombre);
      });

    });

    
  }


}
