import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Alumnos } from '../../models/alumnos';
import { CardEquiposComponent } from "../../components/card-equipos/card-equipos.component";
import { TemporizadorComponent } from "../../components/temporizador/temporizador.component";
import { CardSeleccionComponent } from "../../components/card-seleccion/card-seleccion.component";
import Swal from 'sweetalert2';
import { CardEnjuegoComponent } from "../../components/card-enjuego/card-enjuego.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejecutar',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardEquiposComponent, TemporizadorComponent, CardSeleccionComponent, CardEnjuegoComponent, CommonModule],
  templateUrl: './ejecutar.component.html',
  styleUrl: './ejecutar.component.scss'
})
export class EjecutarComponent {
  equipo1 : Alumnos [] = [
    { id: 1, names: 'Ing. Abarca', equipo: '1' },
    { id: 2, names: 'Ing. Melissa', equipo: '1' },
    { id: 3, names: 'Ing. Sujey', equipo: '1' },
    { id: 4, names: 'Ing. Bryan', equipo: '1' },
    { id: 5, names: 'Ing. Milton', equipo: '1' },
    { id: 6, names: 'Ing. Fabricio', equipo: '1' },
    { id: 7, names: 'Ing. Ameth', equipo: '1' },
    { id: 8, names: 'Ing. Manuel de Jesús', equipo: '1' },
    { id: 9, names: 'Ing. Héctor', equipo: '1' },
    { id: 10, names: 'Ing. Gael', equipo: '1' },
    { id: 11, names: 'Ing.Lyz', equipo: '1' },
    { id: 12, names: 'Ing. Luis', equipo: '1' },
    { id: 13, names: 'Ing. Sayuri', equipo: '1' }
  ]

  equipo2 : Alumnos [] = [
    {id: 1, names: 'Ing. Jose', equipo: '2' },
    { id: 2, names: 'Ing. Christopher', equipo: '2' },
    { id: 3, names: 'Ing. Angel', equipo: '2' },
    { id: 4, names: 'Ing. Maximiliano', equipo: '2' },
    { id: 5, names: 'Ing. Eduardo', equipo: '2' },
    { id: 6, names: 'Ing. Fredy', equipo: '2' },
    { id: 7, names: 'Ing. Yara', equipo: '2' },
    { id: 8, names: 'Ing. Bruno', equipo: '2' },
    { id: 9, names: 'Ing. Joaquin', equipo: '2' },
    { id: 10, names: 'Ing. Antonio', equipo: '2' },
    { id: 11, names: 'Ing. Osvaldo', equipo: '2' },
    { id: 12, names: 'Ing. Marcos', equipo: '2' },
    { id: 13, names: 'Ing. Ulises', equipo: '2' }
  ]

  selectedStudent1: string | null = null;
  selectedStudent2: string | null = null;
  participatedStudents: { equipo1: string[], equipo2: string[] } = { equipo1: [], equipo2: [] };

  equipoGanador : string | null = null;

  searchText : string = '';
  filteredStudents : string [] = [];

  ejecutar() {
    const randomIndex1 = Math.floor(Math.random() * this.equipo1.length);
    const randomIndex2 = Math.floor(Math.random() * this.equipo2.length);

    this.selectedStudent1 = this.equipo1[randomIndex1].names;
    this.selectedStudent2 = this.equipo2[randomIndex2].names;
    
    this.ingesParticipados();

    Swal.fire({
      title: 'Ingenieros seleccionados',
      html: `
        <div style="font-size: 24px; text-align: left;">
          <p><strong>Equipo 1:</strong> ${this.selectedStudent1}</p>
          <p><strong>Equipo 2:</strong> ${this.selectedStudent2}</p>
        </div>
      `,
      icon: 'success',
      iconHtml: '<i class="fas fa-code"></i>',
      showClass: {
        popup: 'animate__animated animate__zoomIn animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOut animate__faster'
      },
      background: '#fefefe',
      color: '#333',
      confirmButtonText: '¡Listo!',
      confirmButtonColor: '#3085d6',
      customClass: {
        icon: 'custom-icon'
      },
      didRender: () => {
        const confirmButton = document.querySelector('.swal2-confirm') as HTMLElement;
        if (confirmButton) {
          confirmButton.style.fontFamily = "'Poppins', sans-serif";
        }
      }
    });          
  }

  ingesParticipados() {
    if (this.selectedStudent1) {
      this.participatedStudents.equipo1.push(this.selectedStudent1);
      this.equipo1 = this.equipo1.filter(inges => inges.names != this.selectedStudent1);
    }

    if (this.selectedStudent2) {
      this.participatedStudents.equipo2.push(this.selectedStudent2);
      this.equipo2 = this.equipo2.filter(inges => inges.names != this.selectedStudent2);
    }
  }

  onSearch() {
    const value = this.searchText.toLocaleLowerCase();
    this.filteredStudents = [];

    const allStudents = [...this.equipo1, ...this.equipo2];

    if (value) {
      this.filteredStudents = allStudents
      .filter(inges => inges.names.toLocaleLowerCase().includes(value))
      .map(inges => inges.names);
    }
  }

  checkParticipation() {
    const foundStudent = this.participatedStudents.equipo1.concat(this.participatedStudents.equipo2)
      .find(student => student.toLowerCase() === this.searchText.toLowerCase());

      if (foundStudent) {
        Swal.fire(`${this.searchText} ya ha participado.`);
      } else {
        Swal.fire(`${this.searchText} no ha participado.`);
      }

      this.searchText = '';
      this.filteredStudents = [];
  }  
}
