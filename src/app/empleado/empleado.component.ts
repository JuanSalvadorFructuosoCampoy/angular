import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado', //Este es el nombre que debe tener la etiqueta HTML para que se muestre el contenido de este componente
  standalone: true,
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  nombre = "Juansa";
  apellido = "Campoy";
  private edad = 33; //Los modificadores de acceso private, public y protected se pueden usar aquí
  //empresa = "Freelance";
  mensajEdad = "";

  getEdad() { return this.edad; }

  cambiaEmpresa(value: string) {

  }

}
