import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';//Añadimos esto para poder usar el ngModel en el template empleado.component.html, usando el binding bidireccional

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FormsModule], //Añadimos FormsModule para poder usar el ngModel en el template empleado.component.html usando el binding bidireccional
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  nombre = "Juansa";
  apellido = "Campoy";
  private edad = 33;
  empresa = "Google"; //El valor de la empresa ahora va en dos direcciones: se verá en el texto y en el input, gracias al binding bidireccional
  mensajEdad = "";
  habilitacionCuadro = true;
  usuRegistrado = false;

  textoRegistro = "No hay nadie registrado";

  getEdad() { return this.edad; }

  getRegistroUsuario() {
    this.usuRegistrado = false;
  }

  
  setUsuarioRegistrado(event: Event) {
   
    if ((<HTMLInputElement>event.target).value == "si") { 
      this.textoRegistro = "El usuario se ha registrado";
    } else {
      this.textoRegistro = "No hay nadie registrado";
    }
  }
}
