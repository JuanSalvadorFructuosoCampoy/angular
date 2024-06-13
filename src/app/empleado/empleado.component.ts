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
  habilitacionCuadro = true; //Esta propiedad debe bindearse con la propiedad del cuadro de texto del template empleado.component.html
  usuRegistrado = false; //Esta propiedad debe bindearse con la propiedad del cuadro de texto del template empleado.component.html
  getEdad() { return this.edad; }

  cambiaEmpresa(value: string) {}
  
  getRegistroUsuario() {
    this.usuRegistrado = false;
  }

  setUsuarioRegistrado() {
    alert("El usuario se ha registrado correctamente");//Creamos la función que se va a activar cuando hagamos click en el checkbox
  }
  //Llamamos a la función en el template y establecemos el valor de usuRegistrado, así se actualiza la checkbox

}
