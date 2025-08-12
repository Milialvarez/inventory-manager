// add-element-button.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-add-element-button',
  template: `
   <div class="flex justify-center mt-9">
    <button (click)="onClick()"
      class="flex items-center gap-2 px-4 py-2 bg-primary_darker hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition">
      Agregar nuevo compuesto
    </button>
  </div>
  `,
})
export class AddElementButtonComponent {
  
  constructor(private router: Router) {}
  
  onClick() {
    this.router.navigate(['/crear-compuesto']);
  }
}