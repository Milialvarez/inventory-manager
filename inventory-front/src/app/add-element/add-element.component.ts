// add-element-button.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-add-element-button',
  template: `
<button (click)="onClick()"
  class="flex items-center gap-2 px-4 py-2 bg-primary_darker hover:bg-primary_dark text-white hover:text-secondary_darker font-medium rounded-lg shadow-md transition">
  <span>Agregar nuevo compuesto</span>
</button>

  `,
})
export class AddElementButtonComponent {
  
  constructor(private router: Router) {}
  
  onClick() {
    this.router.navigate(['/crear-compuesto']);
  }
}