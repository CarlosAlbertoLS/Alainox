import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-linea-hogar',
  templateUrl: './linea-hogar.component.html'
})
export class LineaHogarComponent{
  constructor(public _is:InformacionService){}
}
