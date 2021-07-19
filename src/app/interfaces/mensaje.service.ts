export interface Mensaje{
  id?:number;
  nombres: string;
  apellidos: string;
  email?: string;
  telefono?: string;
  comentarios: string;
  createdAt?: Date;
  updatedAt?: Date;
}
