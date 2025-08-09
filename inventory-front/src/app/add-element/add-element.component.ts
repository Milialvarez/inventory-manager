// add-element-button.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor(private router: Router) {}
  
  onClick() {
    this.router.navigate(['/crear-compuesto']);
  }
}