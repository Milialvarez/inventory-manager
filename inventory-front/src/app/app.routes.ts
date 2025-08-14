// routes.ts
import { Routes } from '@angular/router';
import { InventorySectionComponent } from './components/inventory-section/inventory-section.component';
import { SingleElementComponent } from './components/single-element/single-element.component';
import { AddElementPageComponent } from './components/add-element-page/add-element-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inventario',
    pathMatch: 'full'
  },
  {
    path: 'inventario',
    component: InventorySectionComponent
  },
  {
    path: 'inventario/:id',
    component: SingleElementComponent
  },
  {
    path: 'crear-compuesto',  // Nueva ruta
    component: AddElementPageComponent
  }
];