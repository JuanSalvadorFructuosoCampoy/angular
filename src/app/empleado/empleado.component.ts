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

  textoRegistro = "No hay nadie registrado";

  getEdad() { return this.edad; }

  cambiaEmpresa(value: string) { }

  getRegistroUsuario() {
    this.usuRegistrado = false;
  }

  //Para los parámetros, la notación es la siguiente: nombreParametro: tipoDato
  setUsuarioRegistrado(event: Event) {
    //Event.target hace referencia al elemento HTML que ha disparado el evento
    // alert(event.target); //Mostramos el tipo de objeto en la alerta. Con console.log no podemos ver el tipo de objeto, mientras que con alert sí. Esto es útil para castearlo en el if de abajo

    // alert("El usuario se ha registrado correctamente");//Creamos la función que se va a activar cuando hagamos click en el checkbox
    //this.textoRegistro = "El usuario se ha registrado"; //Establecemos el valor de la propiedad textoRegistro para que se muestre en el template al hacer click en el checkbox
    if ((<HTMLInputElement>event.target).value == "si") { //Lo casteamos a HTMLInputElement para que TypeScript no nos de error, ya que al usar event.target obtenemos que es de tipo HTMLInputElement
      this.textoRegistro = "El usuario se ha registrado";
    } else {
      this.textoRegistro = "No hay nadie registrado";
    }
    //Llamamos a la función en el template y establecemos el valor de usuRegistrado, así se actualiza la checkbox
  }
}
