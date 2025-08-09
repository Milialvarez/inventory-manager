import { Routes } from '@angular/router';
import { InventorySectionComponent } from './inventory-section/inventory-section.component';
import { SingleElementComponent } from './single-element/single-element.component';
import { AddElementPageComponent } from './add-element-page/add-element-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inventario',
    pathMatch: 'full'
  },
  {
    path: 'inventario',
    component: InventorySectionComponent // Lista con filtros
  },
  {
    path: 'inventario/:id',
    component: SingleElementComponent // Vista detallada de un solo elemento
  },
   { path: 'add-element', component: AddElementPageComponent },
];
