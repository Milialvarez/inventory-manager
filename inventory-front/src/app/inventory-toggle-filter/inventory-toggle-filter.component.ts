import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inventory-toggle-filter',
  templateUrl: './inventory-toggle-filter.component.html',
  styleUrls: [],
  imports: [CommonModule]
})
export class InventoryToggleFilterComponent {
  @Input() value: boolean = false;
  @Output() valueChange = new EventEmitter<boolean>();

  toggle() {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}
