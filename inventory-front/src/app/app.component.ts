import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FilterPanelComponent } from "./filter-panel/filter-panel.component";
import { InventarioComponent } from "./inventory-list/inventory-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FilterPanelComponent, InventarioComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inventory-front';
}
