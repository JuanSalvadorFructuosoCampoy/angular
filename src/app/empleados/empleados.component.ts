import { Component } from '@angular/core';
import { EmpleadoComponent } from '../empleado/empleado.component';
import { EmpleadoInlineComponent } from '../empleado-inline/empleado-inline.component';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [EmpleadoComponent, EmpleadoInlineComponent], //Aqui se importa el componente EmpleadoComponent, además de indicarlo con el import arriba del todo
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

}
