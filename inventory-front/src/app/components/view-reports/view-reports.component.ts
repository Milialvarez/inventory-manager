// report-button.component.ts
import { Component } from '@angular/core';
import { Estadistica } from '../../models/statisticsModel';

@Component({
  selector: 'app-report-button',
  standalone: true,
  templateUrl: './view-reports.component.html',
})
export class ViewReportsComponent {
  stats: Estadistica = {
    totalEnUso: 0,
    totalEnStock: 0,
    valorTotal: 0,
    fechaGeneracion: new Date(),
    tipos: [
      { tipo: 'CPU', enUso: 0, enStock: 0 },
      { tipo: 'RAM', enUso: 0, enStock: 0 },
      { tipo: 'Placa de Video', enUso: 0, enStock: 0 }
    ]
  };

  descargarReporteCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";

    csvContent += "Reporte de Inventario\n\n";
    csvContent += "Total en uso,Total en stock,Valor total inventario\n";
    csvContent += `${this.stats.totalEnUso},${this.stats.totalEnStock},${this.stats.valorTotal}\n\n`;

    csvContent += "Tipo,En uso,En stock\n";
    this.stats.tipos.forEach((t) => {
      csvContent += `${t.tipo},${t.enUso},${t.enStock}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download", 
      `reporte_inventario_${this.stats.fechaGeneracion.toISOString().slice(0,10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
