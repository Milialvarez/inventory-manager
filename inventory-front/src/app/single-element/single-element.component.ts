import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-single-element',
  imports: [CommonModule, FormsModule],
  templateUrl: './single-element.component.html',
})
export class SingleElementComponent {
  elemento: any;
  mostrarNotas = false;
  modoEdicion = false;
  nuevoElementoId = '';
  nuevoElementoNombre = '';
  nuevoElementoTipo = '';
  nuevoElementoValor = 0;

  elementosSimples = [
    { id: 's1', nombre: 'Intel Core i7', tipo: 'CPU', valorUnitario: 150000 },
    { id: 's2', nombre: 'Corsair Vengeance 16GB', tipo: 'RAM', valorUnitario: 40000 },
    { id: 's3', nombre: 'SSD Samsung 1TB', tipo: 'Almacenamiento', valorUnitario: 60000 },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    this.elemento = {
      id,
      personalId: 101,
      nombre: 'Nuvix',
      descripcion: 'Computadora para tareas administrativas',
      componentes: [
        { elementoId: 's1', cantidad: 1 },
        { elementoId: 's2', cantidad: 2 },
        { elementoId: 's3', cantidad: 1 },
      ],
      valorCalculado: 150000 + 2 * 40000 + 60000,
      ubicacion: 'Oficina Central',
    };
  }

  volver() {
    this.router.navigate(['/']);
  }

  obtenerElementoSimple(id: string) {
    return this.elementosSimples.find(e => e.id === id);
  }

  toggleNotas() {
    this.mostrarNotas = !this.mostrarNotas;
  }

  guardarNota() {
    console.log('Nota guardada:', this.elemento.nota);
  }

  editarElemento() {
    this.modoEdicion = true;
  }

  cancelarEdicion() {
    this.modoEdicion = false;
  }

  eliminarComponente(index: number) {
    this.elemento.componentes.splice(index, 1);
  }

  agregarComponenteExistente() {
    if (!this.nuevoElementoId) return;
    this.elemento.componentes.push({ elementoId: this.nuevoElementoId, cantidad: 1 });
    this.nuevoElementoId = '';
  }

  crearYAgregarElemento() {
    if (!this.nuevoElementoNombre.trim()) return;
    const nuevoId = 's' + (this.elementosSimples.length + 1);
    const nuevoElemento = {
      id: nuevoId,
      nombre: this.nuevoElementoNombre,
      tipo: this.nuevoElementoTipo,
      valorUnitario: this.nuevoElementoValor
    };
    this.elementosSimples.push(nuevoElemento);
    this.elemento.componentes.push({ elementoId: nuevoId, cantidad: 1 });
    this.nuevoElementoNombre = '';
    this.nuevoElementoTipo = '';
    this.nuevoElementoValor = 0;
  }
}
