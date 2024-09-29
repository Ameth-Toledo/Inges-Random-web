import { Component } from '@angular/core';

@Component({
  selector: 'app-card-ganador',
  standalone: true,
  imports: [],
  templateUrl: './card-ganador.component.html',
  styleUrl: './card-ganador.component.scss'
})
export class CardGanadorComponent {

  equipo1Seleccionado : boolean = false;
  equipo2Seleccionado : boolean = false;

  seleccionarGanador(equipo : string) {
    if (equipo === 'equipo1') {
      this.equipo1Seleccionado = true;
      this.equipo2Seleccionado = false;
    } else if (equipo === 'equipo2') {
      this.equipo1Seleccionado = false;
      this.equipo2Seleccionado = true;
    }
  }

  confirmarGanador () {
    alert("hola, mñna sigo")
  }
}
