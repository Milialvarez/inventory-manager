import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ElementoSimple {
  id: string;
  nombre: string;
  tipo: string;
  descripcion?: string;
  valorUnitario: number;
  stock: number;
  especificaciones: { [clave: string]: string | number };
}

interface ComponenteAsociado {
  elementoId: string;
  cantidad: number;
}

interface ElementoCompuesto {
  id: string;
  personalId: number;
  nombre?: string;
  descripcion?: string;
  componentes: ComponenteAsociado[];
  valorCalculado: number;
  ubicacion?: string;
}

@Component({
  selector: 'app-inventory-item-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory-item-editor.component.html',
  styleUrl: './inventory-item-editor.component.scss'
})
export class InventoryItemEditorComponent {
  @Input() compuesto!: ElementoCompuesto;
  @Input() elementosSimplesDisponibles: ElementoSimple[] = [];
  @Output() cancelar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<ElementoCompuesto>();

  componenteParaAgregar: string = '';
  confirmacionEliminacion: string | null = null;

  eliminarComponente(elementoId: string): void {
    this.confirmacionEliminacion = elementoId;
  }

  confirmarEliminacion(elementoId: string): void {
    this.compuesto.componentes = this.compuesto.componentes.filter(
      c => c.elementoId !== elementoId
    );
    this.confirmacionEliminacion = null;
  }

  cancelarEliminacion(): void {
    this.confirmacionEliminacion = null;
  }

  agregarComponente(): void {
    if (!this.componenteParaAgregar) return;

    const yaExiste = this.compuesto.componentes.find(c => c.elementoId === this.componenteParaAgregar);
    if (yaExiste) return;

    this.compuesto.componentes.push({
      elementoId: this.componenteParaAgregar,
      cantidad: 1,
    });

    this.componenteParaAgregar = '';
  }

  guardarCambios(): void {
    this.guardar.emit(this.compuesto);
  }

  obtenerElementoSimple(id: string): ElementoSimple | undefined {
  return this.elementosSimplesDisponibles.find(e => e.id === id);
}

}
