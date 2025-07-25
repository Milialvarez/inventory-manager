import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FilterPanelComponent } from "./filter-panel/filter-panel.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FilterPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inventory-front';
}
