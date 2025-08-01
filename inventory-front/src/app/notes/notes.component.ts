import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notas',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class NotesComponent implements OnInit {
  nota: string = '';
  modoEdicion: boolean = false;

  ngOnInit() {
    const guardada = localStorage.getItem('nota');
    if (guardada) {
      this.nota = guardada;
    }
  }

  guardarNota() {
    localStorage.setItem('nota', this.nota);
    this.modoEdicion = false;
  }

  editarNota() {
    this.modoEdicion = true;
  }
}
