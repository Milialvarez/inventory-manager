export interface EstadisticaTipo {
  tipo: string;   
  enUso: number; 
  enStock: number; 
}

export interface Estadistica {
  totalEnUso: number;      
  totalEnStock: number;  
  tipos: EstadisticaTipo[];
  valorTotal: number;    
  fechaGeneracion: Date;   
}
