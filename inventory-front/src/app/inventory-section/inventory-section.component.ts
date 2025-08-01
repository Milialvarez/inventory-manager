import { Component } from '@angular/core';
import { FilterPanelComponent } from "../filter-panel/filter-panel.component";
import { InventoryComponent } from "../inventory-list/inventory-list.component";

@Component({
  selector: 'app-inventory-section',
  imports: [FilterPanelComponent, InventoryComponent],
  templateUrl: './inventory-section.component.html',
  styleUrl: './inventory-section.component.scss'
})
export class InventorySectionComponent {

}
