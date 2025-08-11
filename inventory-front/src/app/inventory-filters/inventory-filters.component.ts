import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inventory-filters',
  imports: [],
  templateUrl: './inventory-filters.component.html',
  styleUrl: './inventory-filters.component.scss'
})
export class InventoryFiltersComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() filterKey: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<{ key: string, value: string }>();

  // cuando detectás cambio en input
onInputChange(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  this.valueChange.emit({ key: this.filterKey, value });
}

}
