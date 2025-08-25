import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddNewSimpleButtonComponent } from "../add-new-simple-button/add-new-simple-button.component";

@Component({
  standalone: true,
  selector: 'app-single-element',
  imports: [CommonModule, FormsModule, AddNewSimpleButtonComponent],
  templateUrl: './single-element.component.html',
})
export class SingleElementComponent {
  elemento: any;
  elementoOriginal: any; // Se agrega para guardar el estado original
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

  notaGuardada: string = '';

  guardarNota() {
    this.notaGuardada = this.elemento.nota || '';
    console.log('Nota guardada:', this.notaGuardada);
    this.mostrarNotas = false;
  }

  editarElemento() {
    this.elementoOriginal = JSON.parse(JSON.stringify(this.elemento)); // Clonar el objeto para revertir cambios
    this.modoEdicion = true;
  }

  cancelarEdicion() {
    this.elemento = JSON.parse(JSON.stringify(this.elementoOriginal)); // Restaurar el objeto original
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

  guardarCambios() {
    this.recalcularValorTotal();
    
    // Aquí llamarías a tu servicio para persistir los cambios
    // this.inventarioService.actualizarElementoCompuesto(this.elemento);
    
    console.log('Cambios guardados:', this.elemento);
    
    this.modoEdicion = false;
    
    this.nuevoElementoId = '';
    this.nuevoElementoNombre = '';
    this.nuevoElementoTipo = '';
    this.nuevoElementoValor = 0;
  }

  // Método auxiliar para recalcular el valor total
  private recalcularValorTotal() {
    this.elemento.valorCalculado = this.elemento.componentes.reduce((total: number, comp: any) => {
      const elementoSimple = this.obtenerElementoSimple(comp.elementoId);
      return total + (elementoSimple ? elementoSimple.valorUnitario * comp.cantidad : 0);
    }, 0);
  }

  guardarComponente(index: number) {
  const comp = this.elemento.componentes[index];
  const simple = this.obtenerElementoSimple(comp.elementoId);

  if (simple && comp.cantidad > 0 && simple.valorUnitario >= 0) {
    this.recalcularValorTotal();
    console.log(`Componente ${simple.nombre} guardado con cantidad: ${comp.cantidad}, valor: ${simple.valorUnitario}`);
  } else {
    console.warn('Valores inválidos en el componente');
  }
}

}
