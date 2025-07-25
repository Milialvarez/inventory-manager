import { Component } from '@angular/core';
import { InventoryFiltersComponent } from "../inventory-filters/inventory-filters.component";

@Component({
  selector: 'app-filter-panel',
  imports: [InventoryFiltersComponent],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.scss'
})
export class FilterPanelComponent {
  filters: { [key: string]: string } = {
  id: '',
  ram: '',
  cpu: '',
  ssd: '',
  hdd: '',
};

handleFilterChange(event: { key: string; value: string }) {
  this.filters[event.key] = event.value;
  // Podés llamar al service de búsqueda o filtrar localmente
}

}
