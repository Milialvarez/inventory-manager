import { Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { InventorySectionComponent } from './inventory-section/inventory-section.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inventario',
    pathMatch: 'full'
  },
  {
    path: 'inventario',
    component: InventorySectionComponent // este mostrará el filtro y la lista
  },
  {
    path: 'notas',
    component: NotesComponent
  }
];
