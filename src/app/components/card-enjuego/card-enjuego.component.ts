import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-enjuego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-enjuego.component.html',
  styleUrl: './card-enjuego.component.scss'
})
export class CardEnjuegoComponent {
  @Input() student1: string | null = null;
  @Input() student2: string | null = null;
}
