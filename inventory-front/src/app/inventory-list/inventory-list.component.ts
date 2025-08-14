import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface ElementoSimple {
  id: string;
  nombre: string;
  tipo: string;
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
  nota?: string;
}

@Component({
  standalone: true,
  selector: 'app-inventory-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.scss'
})
export class InventoryComponent {
  constructor(private router: Router) {}

 elementosSimples: ElementoSimple[] = [
  { id: 's1', nombre: 'Intel Core i7', tipo: 'CPU', valorUnitario: 150000, stock: 10, especificaciones: { nucleos: 8, frecuencia: '3.6GHz' } },
  { id: 's2', nombre: 'Corsair Vengeance 16GB', tipo: 'RAM', valorUnitario: 40000, stock: 20, especificaciones: { tipo: 'DDR4', velocidad: '3200MHz' } },
  { id: 's3', nombre: 'SSD Samsung 1TB', tipo: 'Almacenamiento', valorUnitario: 60000, stock: 15, especificaciones: { tipo: 'NVMe', velocidad: '3500MB/s' } },
  { id: 's4', nombre: 'AMD Ryzen 9 5900X', tipo: 'CPU', valorUnitario: 180000, stock: 5, especificaciones: { nucleos: 12, frecuencia: '3.7GHz' } },
  { id: 's5', nombre: 'Kingston Fury 8GB', tipo: 'RAM', valorUnitario: 25000, stock: 35, especificaciones: { tipo: 'DDR4', velocidad: '3000MHz' } },
  { id: 's6', nombre: 'HDD Seagate 2TB', tipo: 'Almacenamiento', valorUnitario: 25000, stock: 40, especificaciones: { tipo: 'SATA', velocidad: '7200RPM' } },
  { id: 's7', nombre: 'NVIDIA RTX 3070', tipo: 'GPU', valorUnitario: 300000, stock: 7, especificaciones: { memoria: '8GB GDDR6', nucleosCuda: 5888 } },
  { id: 's8', nombre: 'NVIDIA RTX 4090', tipo: 'GPU', valorUnitario: 800000, stock: 2, especificaciones: { memoria: '24GB GDDR6X', nucleosCuda: 16384 } },
  { id: 's9', nombre: 'Fuente Corsair 750W', tipo: 'Fuente de Poder', valorUnitario: 35000, stock: 18, especificaciones: { certificacion: '80+ Gold', tipo:'modular'} },
  { id: 's10', nombre: 'Gabinete NZXT H510', tipo: 'Gabinete', valorUnitario: 20000, stock: 25, especificaciones: { formato: 'ATX Mid Tower', color: 'Negro' } }
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
      { elementoId: 's9', cantidad: 1 },
      { elementoId: 's10', cantidad: 1 }
    ],
    valorCalculado: 150000 + 2 * 40000 + 60000 + 35000 + 20000,
    ubicacion: 'Oficina Central'
  },
  {
    id: 'c2',
    personalId: 102,
    nombre: 'Workstation Pro',
    descripcion: 'Estación de trabajo para diseño gráfico',
    componentes: [
      { elementoId: 's4', cantidad: 1 },
      { elementoId: 's2', cantidad: 4 },
      { elementoId: 's7', cantidad: 1 },
      { elementoId: 's3', cantidad: 2 },
      { elementoId: 's9', cantidad: 1 },
      { elementoId: 's10', cantidad: 1 }
    ],
    valorCalculado: 180000 + 4 * 40000 + 300000 + 2 * 60000 + 35000 + 20000,
    ubicacion: 'Sala Creativa'
  },
  {
    id: 'c3',
    personalId: 103,
    nombre: 'Gaming Beast',
    descripcion: 'PC Gamer de alto rendimiento',
    componentes: [
      { elementoId: 's4', cantidad: 1 },
      { elementoId: 's5', cantidad: 4 },
      { elementoId: 's8', cantidad: 1 },
      { elementoId: 's3', cantidad: 2 },
      { elementoId: 's9', cantidad: 1 },
      { elementoId: 's10', cantidad: 1 }
    ],
    valorCalculado: 180000 + 4 * 25000 + 800000 + 2 * 60000 + 35000 + 20000,
    ubicacion: 'Sala Gaming'
  },
  {
    id: 'c4',
    personalId: 104,
    nombre: 'Servidor de Archivos',
    descripcion: 'Servidor dedicado para almacenamiento masivo',
    componentes: [
      { elementoId: 's1', cantidad: 1 },
      { elementoId: 's5', cantidad: 2 },
      { elementoId: 's6', cantidad: 6 },
      { elementoId: 's9', cantidad: 1 },
      { elementoId: 's10', cantidad: 1 }
    ],
    valorCalculado: 150000 + 2 * 25000 + 6 * 25000 + 35000 + 20000,
    ubicacion: 'Data Center'
  }
];


   idPendienteAEliminar: string | null = null;

  verDetalles(id: string) {
    this.router.navigate(['/elemento', id]);
  }

  abrirConfirmacionEliminacion(id: string) {
    this.idPendienteAEliminar = id;
  }

  cerrarConfirmacion() {
    this.idPendienteAEliminar = null;
  }

  confirmarEliminacion(id: string) {
    console.log(`Eliminar compuesto con ID: ${id}`);
    // 🔹 A futuro aquí iría la llamada al servicio para eliminar
    this.cerrarConfirmacion();
  }

    guardarNuevoElemento(nuevoElemento: any) {
    // Aquí llamás a tu servicio para guardar en base de datos, o actualizás tu lista local
    console.log('Guardar elemento:', nuevoElemento);
  }
}
