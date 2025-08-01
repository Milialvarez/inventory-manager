import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  nombre: string;
  descripcion?: string;
  componentes: ComponenteAsociado[];
  valorCalculado: number;
  ubicacion?: string;
}

@Component({
  standalone: true, 
  selector: 'app-inventory-list',
  imports: [CommonModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.scss'
})

export class InventoryComponent {
  mostrarDetalles: { [key: string]: boolean } = {};

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
      nombre: 'PC Oficina #1',
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
      nombre: 'PC Diseño #1',
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
}
