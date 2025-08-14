export interface EstadisticaTipo {
  tipo: string;   // Nombre del tipo de elemento (CPU, RAM, etc.)
  enUso: number;  // Cantidad en uso
  enStock: number; // Cantidad en stock
}

export interface Estadistica {
  totalEnUso: number;      // Cantidad total de elementos en uso
  totalEnStock: number;    // Cantidad total de elementos en stock
  tipos: EstadisticaTipo[]; // Lista con estadísticas por tipo
  valorTotal: number;      // Valor monetario total del inventario
  fechaGeneracion: Date;   // Fecha y hora de la generación de datos
}
