import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Services/persona.service';
import { Persona } from 'src/app/Modelo/persona';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {
  persona: Persona;
  constructor(private personaService:PersonaService) { }

  ngOnInit() {
  }

  delete(confirmacion:string){
    
    if(confirmacion=="true")this.personaService.deleteTask(this.persona.identificacion).subscribe();

  }
}
