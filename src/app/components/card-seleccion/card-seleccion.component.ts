import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-seleccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-seleccion.component.html',
  styleUrl: './card-seleccion.component.scss'
})
export class CardSeleccionComponent {
  @Input() participatedStudents: { equipo1: string[], equipo2: string[] } = { equipo1: [], equipo2: [] };
}
