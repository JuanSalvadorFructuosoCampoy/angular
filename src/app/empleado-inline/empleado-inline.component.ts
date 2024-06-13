import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado-inline',
  standalone: true,
  imports: [],
  // templateUrl: './empleado-inline.component.html',
  //El uso de esta coma ` permite que lo que haya dentro de ella sea un string multilinea
  template: `<p>
    Este es un empleado de componente inline
    </p>`,
  // styleUrl: './empleado-inline.component.css'
  //Establezco el estilo directamente en el componente, a esto se le conoce como inline
  styles: ["p{background-color: lightblue;}"]
})
export class EmpleadoInlineComponent {

}
