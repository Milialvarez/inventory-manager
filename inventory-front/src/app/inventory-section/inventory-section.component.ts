import { Component } from '@angular/core';
import { FilterPanelComponent } from "../filter-panel/filter-panel.component";
import { InventoryComponent } from "../inventory-list/inventory-list.component";
import { AddElementButtonComponent } from "../add-element/add-element.component";

@Component({
  selector: 'app-inventory-section',
  imports: [FilterPanelComponent, InventoryComponent, AddElementButtonComponent],
  templateUrl: './inventory-section.component.html',
  styleUrl: './inventory-section.component.scss'
})
export class InventorySectionComponent {

}
