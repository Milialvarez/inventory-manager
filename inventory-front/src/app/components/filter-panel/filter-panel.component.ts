import { Component } from '@angular/core';
import { InventoryFiltersComponent } from "../inventory-filters/inventory-filters.component";
import { InventoryToggleFilterComponent } from "../inventory-toggle-filter/inventory-toggle-filter.component";

@Component({
  selector: 'app-filter-panel',
  imports: [InventoryFiltersComponent, InventoryToggleFilterComponent],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.scss'
})
export class FilterPanelComponent {
 filters: { [key: string]: string | boolean } = {
  id: '',
  ram: '',
  cpu: '',
  ssd: '',
  hdd: '',
  stock: false,
  descripcion: ''  // clave para búsqueda libre
};


handleFilterChange(event: { key: string; value: string | boolean }) {
  if (event.key === 'stock') {
    // Aseguramos que el valor de stock sea booleano
    this.filters[event.key] = Boolean(event.value);
  } else {
    // Para los otros filtros, guardamos como string
    this.filters[event.key] = String(event.value);
  }

  // Acá podés llamar al service o filtrar localmente según this.filters
}


}
