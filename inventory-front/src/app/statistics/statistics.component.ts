import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

interface TypeSummary {
  type: string;
  cantidad: number;
  desuso: number;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  imports: [CommonModule]
})
export class StatisticsComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @ViewChild('pieChart', { static: false }) pieChart!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  totalEnStock: number = 45;
  totalEnUso: number = 85;
  
  tiposSummary: TypeSummary[] = [
    { type: 'PC', cantidad: 23, desuso: 5 },
    { type: 'Monitor', cantidad: 18, desuso: 4},
    { type: 'Periférico', cantidad: 67, desuso: 20 },
    { type: 'Otros', cantidad: 22, desuso: 1 }
  ];

  perifericosDetail: TypeSummary[] = [
    {type: 'Mouse', cantidad: 20, desuso: 10},
    {type: 'Teclado', cantidad: 20, desuso: 10},
    {type: 'Auriculares', cantidad: 9, desuso: 0},
    {type: 'Camaras', cantidad: 3, desuso: 0},
  ]

  constructor() { }

  ngOnInit(): void {
    // Aquí cargarías tus datos reales
  }

  ngAfterViewInit(): void {
    // Agregar un pequeño delay para asegurar que el DOM esté listo
    setTimeout(() => {
      this.createChart();
    }, 100);
  }

  createChart(): void {
    // Verificar que el ViewChild esté disponible
    if (!this.pieChart?.nativeElement) {
      console.log('Canvas no disponible, reintentando...');
      setTimeout(() => this.createChart(), 100);
      return;
    }

    const ctx = this.pieChart.nativeElement.getContext('2d');
    
    if (ctx) {
      // Destruir el gráfico anterior si existe
      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['En Stock', 'En Uso'],
          datasets: [{
            data: [this.totalEnStock, this.totalEnUso],
            backgroundColor: ['#10b981', '#3b82f6'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}