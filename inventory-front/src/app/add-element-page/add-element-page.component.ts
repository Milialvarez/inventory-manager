// add-element-page.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddNewSimpleButtonComponent } from "../add-new-simple-button/add-new-simple-button.component";

export interface ComponenteAsociado {
  elementoId: string;
  cantidad: number;
}

export interface ElementoSimple {
  id: string;
  nombre: string;
  tipo: string;
  valorUnitario: number;
}

@Component({
  standalone: true,
  selector: 'app-add-element-page',
  imports: [FormsModule, CommonModule, AddNewSimpleButtonComponent],
  templateUrl: './add-element-page.component.html',
})
export class AddElementPageComponent {
  personalId!: number;
  nombre = '';
  descripcion = '';
  ubicacion: string = '';
  usuarioUso: string = '';
  nota = '';
  componentes: ComponenteAsociado[] = [];

  elementosSimples: ElementoSimple[] = [
    { id: 's1', nombre: 'Intel Core i7', tipo: 'CPU', valorUnitario: 150000 },
    { id: 's2', nombre: 'Corsair Vengeance 16GB', tipo: 'RAM', valorUnitario: 40000 },
    { id: 's3', nombre: 'SSD Samsung 1TB', tipo: 'Almacenamiento', valorUnitario: 60000 },
  ];

  nuevoElementoId = '';
  nuevaCantidad = 1;

  nuevoElementoNombre = '';
  nuevoElementoTipo = '';
  nuevoElementoValor = 0;

  constructor(private router: Router) { }

  agregarComponenteExistente() {
    if (this.nuevoElementoId && this.nuevaCantidad > 0) {
      this.componentes.push({ elementoId: this.nuevoElementoId, cantidad: this.nuevaCantidad });
      this.nuevoElementoId = '';
      this.nuevaCantidad = 1;
    }
  }

  crearYAgregarNuevoSimple() {
    if (!this.nuevoElementoNombre.trim()) return;
    const nuevoId = 's' + (this.elementosSimples.length + 1);
    this.elementosSimples.push({
      id: nuevoId,
      nombre: this.nuevoElementoNombre,
      tipo: this.nuevoElementoTipo,
      valorUnitario: this.nuevoElementoValor
    });
    this.componentes.push({ elementoId: nuevoId, cantidad: 1 });
    this.nuevoElementoNombre = '';
    this.nuevoElementoTipo = '';
    this.nuevoElementoValor = 0;
  }

  eliminarComponente(index: number) {
    this.componentes.splice(index, 1);
  }

  guardar() {
    if (!this.personalId) {
      alert('El campo personalId es obligatorio.');
      return;
    }

    const nuevoElementoCompuesto = {
      personalId: this.personalId,
      nombre: this.nombre,
      descripcion: this.descripcion,
      ubicacion: this.ubicacion,
      nota: this.nota,
      componentes: this.componentes,
      valorCalculado: this.componentes.reduce((acc, comp) => {
        const simple = this.elementosSimples.find(e => e.id === comp.elementoId);
        return acc + (simple ? simple.valorUnitario * comp.cantidad : 0);
      }, 0)
    };

    console.log('Guardando nuevo elemento compuesto:', nuevoElementoCompuesto);
    // Aquí iría la llamada al backend o servicio para guardar

    // Luego redirigimos al inventario (ruta /inventory o la que tengas)
    this.router.navigate(['/']);
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
