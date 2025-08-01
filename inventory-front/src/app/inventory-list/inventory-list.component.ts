import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  nota?: string; // ✅ NUEVO
}


@Component({
  standalone: true, 
  selector: 'app-inventory-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.scss'
})

export class InventoryComponent {
  mostrarDetalles: { [key: string]: boolean } = {};
  mostrarNotas: { [key: string]: boolean } = {};
modoEdicionNotas: { [key: string]: boolean } = {};


  elementosSimples: ElementoSimple[] = [
    {
      id: 's1',
      nombre: 'Intel Core i7',
      tipo: 'CPU',
      valorUnitario: 150000,
      stock: 10,
      especificaciones: { nucleos: 8, frecuencia: '3.6GHz' },
    },
    {
      id: 's2',
      nombre: 'Corsair Vengeance 16GB',
      tipo: 'RAM',
      valorUnitario: 40000,
      stock: 20,
      especificaciones: { tipo: 'DDR4', velocidad: '3200MHz' },
    },
    {
      id: 's3',
      nombre: 'SSD Samsung 1TB',
      tipo: 'Almacenamiento',
      valorUnitario: 60000,
      stock: 15,
      especificaciones: { tipo: 'NVMe', velocidad: '3500MB/s' },
    },
  ];

  elementosCompuestos: ElementoCompuesto[] = [
    {
      id: 'c1',
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
    },
    {
      id: 'c2',
      personalId: 102,
      nombre: undefined,
      descripcion: 'Estación de trabajo para diseño gráfico',
      componentes: [
        { elementoId: 's1', cantidad: 1 },
        { elementoId: 's2', cantidad: 4 },
        { elementoId: 's3', cantidad: 2 },
      ],
      valorCalculado: 150000 + 4 * 40000 + 2 * 60000,
      ubicacion: 'Sala Creativa',
    },
  ];

  obtenerElementoSimple(id: string): ElementoSimple | undefined {
    return this.elementosSimples.find(e => e.id === id);
  }

  toggleDetalles(id: string): void {
    this.mostrarDetalles[id] = !this.mostrarDetalles[id];
  }

  toggleNota(id: string): void {
  this.mostrarNotas[id] = !this.mostrarNotas[id];
}

editarNota(id: string): void {
  this.modoEdicionNotas[id] = true;
}


ngOnInit() {
  const notasGuardadas = localStorage.getItem('notasCompuestas');
  if (notasGuardadas) {
    const notas = JSON.parse(notasGuardadas);
    this.elementosCompuestos.forEach(c => {
      if (notas[c.id]) {
        c.nota = notas[c.id];
      }
    });
  }
}

guardarNota(id: string): void {
  this.modoEdicionNotas[id] = false;

  const notas = this.elementosCompuestos.reduce((acc, curr) => {
    if (curr.nota) {
      acc[curr.id] = curr.nota;
    }
    return acc;
  }, {} as { [key: string]: string });

  localStorage.setItem('notasCompuestas', JSON.stringify(notas));
}

}
