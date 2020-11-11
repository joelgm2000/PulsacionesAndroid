import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Services/persona.service';
import { Persona } from 'src/app/Modelo/persona';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  persona: Persona;
  constructor(private personaService:PersonaService) { }

  ngOnInit() {
    this.persona=new Persona();
  }
 
  update(confirmacion:string){
    if(confirmacion=="true")this.personaService.updateTask(this.persona).subscribe();
  }

 
}
