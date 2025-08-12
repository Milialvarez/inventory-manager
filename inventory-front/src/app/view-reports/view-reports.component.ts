// report-button.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-report-button',
  standalone: true,
  templateUrl: './view-reports.component.html',
})
export class ViewReportsComponent {
  descargarReporte() {
    // 🔹 En el futuro acá iría la generación del CSV
    console.log('Generar y descargar reporte CSV');
  }
}
