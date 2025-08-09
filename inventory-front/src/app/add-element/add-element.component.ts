// add-element-button.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-add-element-button',
  template: `
   <div class="flex justify-center mt-9">
  <button (click)="onClick()"
    class="bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-lg transition">
    + Agregar nuevo compuesto
  </button>
</div>

  `,
})
export class AddElementButtonComponent {
  @Output() abrirCrear = new EventEmitter<void>();
  
  onClick() {
    this.abrirCrear.emit();
  }
}
