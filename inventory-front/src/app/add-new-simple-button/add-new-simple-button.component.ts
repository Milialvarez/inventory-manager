import { Component } from '@angular/core';
import { ComponenteAsociado, ElementoSimple } from '../add-element-page/add-element-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-simple-button',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-new-simple-button.component.html',
  styleUrl: './add-new-simple-button.component.scss'
})
export class AddNewSimpleButtonComponent {

    elementosSimples: ElementoSimple[] = [
    { id: 's1', nombre: 'Intel Core i7', tipo: 'CPU', valorUnitario: 150000 },
    { id: 's2', nombre: 'Corsair Vengeance 16GB', tipo: 'RAM', valorUnitario: 40000 },
    { id: 's3', nombre: 'SSD Samsung 1TB', tipo: 'Almacenamiento', valorUnitario: 60000 },
  ];

   componentes: ComponenteAsociado[] = [];


    nuevoElementoNombre = '';
    nuevoElementoTipo = '';
    nuevoElementoValor = 0;

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
}
